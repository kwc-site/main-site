import PresentationShortView from "../../../components/PresentationShortView";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../config/firebase";

export async function getStaticProps() {
  const lessonsCollection = collection(db, "lessons");

  const querySnapshot = await getDocs(lessonsCollection);
  console.log(
    "Firestore Query Result:",
    querySnapshot.docs.map((doc) => doc)
  );
  const pastLessons = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));

  return {
    props: {
      pastLessons,
    },
    revalidate: 60 * 60 * 24,
  };
}

export default function PastLessons({ pastLessons }) {
  return (
    <div className="w-full text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mb-8">Past Lessons</h1>
        <hr className="bg-white my-8" />
        <ul>
          {pastLessons.map((lesson) => (
            <PresentationShortView
              key={lesson.id}
              title={lesson.data.title}
              date={lesson.data.date}
              creator={lesson.data.maker}
              id={lesson.id}
              slidesURL={lesson.data.slidesUrl}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

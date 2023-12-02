// [lessonId].js
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../../config/firebase";

export async function getStaticProps({ params }) {
  const lessonId = params.lessonId;
  const lessonDocRef = doc(db, "lessons", lessonId);

  try {
    const lessonDoc = await getDoc(lessonDocRef);

    if (lessonDoc.exists()) {
      const lesson = {
        id: lessonDoc.id,
        data: lessonDoc.data(),
      };

      return {
        props: {
          lesson,
        },
        revalidate: 60 * 60 * 24,
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error("Error fetching lesson:", error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const lessonsCollection = collection(db, "lessons");
  const querySnapshot = await getDocs(lessonsCollection);
  const lessonIds = querySnapshot.docs.map((doc) => doc.id);

  const paths = lessonIds.map((lessonId) => ({
    params: { lessonId },
  }));

  return { paths, fallback: false }; // Use fallback: false for a full static generation
}

export default function Lesson({ lesson }) {
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen w-full mt-10 mb-10">
      <div className="mx-auto">
        <h1 className="text-white text-3xl mb-3 font-bold">
          {lesson.data.title} by {lesson.data.creator}
        </h1>
        <p className="text-white text-2xl mb-3">Date: {lesson.data.date}</p>
        <iframe
          src={`${lesson.data.slidesUrl}`}
          width="680"
          height="580"
        ></iframe>
      </div>
    </div>
  );
}

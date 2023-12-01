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

  return { paths, fallback: true }; // Use fallback: true for ISR
}

export default function Lesson({ lesson }) {
  if (!lesson) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="flex items-center justify-center h-screen w-full mt-10 mb-10">
      <div className="mx-auto">
        <h1 className="text-white text-3xl mb-3 font-bold">
          {lesson.data.LessonDate} by {lesson.data.Presenter}
        </h1>
        <p className="text-white text-2xl mb-3">
          Date: {lesson.data.LessonName}
        </p>
        <iframe src={`${lesson.data.URL}`} width="680" height="580"></iframe>
      </div>
    </div>
  );
}

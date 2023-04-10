import pastLessonsData from "../../../public/data/pastLessonsData";

export async function getStaticProps({ params }) {
  const lessonId = parseInt(params.lessonId);
  const lesson = pastLessonsData.find((lesson) => lesson.id === lessonId);

  return {
    props: {
      lesson,
    },
  };
}

export async function getStaticPaths() {
  const paths = pastLessonsData.map((lesson) => ({
    params: { lessonId: lesson.id.toString() },
  }));

  return { paths, fallback: false };
}
export default function Lesson({ lesson }) {
  return (
    <div className=" flex items-center justify-center h-screen w-full">
      <div className="mx-auto">
        <h1 className="text-white text-3xl mb-3 font-bold">
          {lesson.title} by {lesson.maker}
        </h1>
        <p className="text-white text-2xl mb-3">Date: {lesson.date}</p>
        <iframe src={`${lesson.slidesUrl}`} width="680" height="580"></iframe>
      </div>
    </div>
  );
}

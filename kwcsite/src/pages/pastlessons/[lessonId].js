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
    <div>
      <h1>
        {lesson.title} by {lesson.maker}
      </h1>
      <p>Date: {lesson.date}</p>
      <iframe src={`${lesson.slidesUrl}`} width="680" height="580"></iframe>
    </div>
  );
}

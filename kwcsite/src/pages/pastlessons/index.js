import PresentationShortView from "../../../components/PresentationShortView";
import pastLessonsData from "../../../public/data/pastLessonsData";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      pastLessons: pastLessonsData,
    },
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
            <div key={lesson.id} className="my-8">
              <PresentationShortView
                title={lesson.title}
                date={lesson.date}
                creator={lesson.maker}
                id={lesson.id}
                slidesURL={lesson.slidesUrl}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

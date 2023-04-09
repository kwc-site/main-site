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
    <div>
      <h1>Past Lessons</h1>
      <ul>
        {pastLessons.map((lesson) => (
          <div key={lesson.id}>
            <PresentationShortView
              title={lesson.title}
              date={lesson.date}
              creator={lesson.maker}
              id={lesson.id}
              slidesURL={lesson.slidesUrl}
            />
            <Link href={`/pastlessons/${lesson.id}`}>
              <button className=" text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                View Lesson Details
              </button>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

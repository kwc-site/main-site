import React from "react";
import useSWR from "swr";
import PresentationShortView from "../../../components/PresentationShortView";
const fetcher = (url) => fetch(url).then((res) => res.json());

function lessons() {
  const { data, error } = useSWR("/api/past-lessons", fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
    dedupingInterval: 5000,
  });

  if (error) return <div>Error loading past lessons.</div>;
  if (!data) return <div>Loading past lessons...</div>;
  return (
    <div>
      <h1>Past Lessons</h1>
      <ul>
        {data.map((lesson) => (
          <PresentationShortView title = {lesson.title} date= {lesson.date} creator = {lesson.creator} id = {lesson.id} slidesURL = {lesson.slidesUrl} ></PresentationShortView>
        ))}
      </ul>
    </div>

    //<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRzHePATJpsB4WXG_7DykpPgWkCA6WMLVfvwoHGLikg5FpyHWYyED3YAiCAhSrxZpAJ8fpL9cuup1Nq/embed?start=false&loop=false&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  );
}

export default lessons;

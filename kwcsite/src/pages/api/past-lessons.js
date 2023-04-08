
import pastLessonsData from "../../../public/data/pastLessonsData"

export default function handler(req, res) {
  res.status(200).json(pastLessonsData);
}
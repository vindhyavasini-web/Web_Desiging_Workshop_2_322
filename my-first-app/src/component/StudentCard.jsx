import Card from "./Card";

function StudentCard({ name, course, marks }) {
  return (
    <Card>
      <h2>{name}</h2>
      <p>
        <strong>Course:</strong> {course}
      </p>
      <p>
        <strong>Marks:</strong> {marks}
      </p>
    </Card>
  );
}

export default StudentCard;

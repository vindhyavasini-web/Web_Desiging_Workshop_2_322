import StudentCard from "./component/StudentCard";

function App() {
  return (
    <main className="app-shell">
      <section className="student-panel">
        <h1>Student Details</h1>

        <div className="student-list">
          <StudentCard name="Aman" course="React JS" marks={92} />
          <StudentCard name="Priya" course="Web Designing" marks={88} />
          <StudentCard name="Rahul" course="JavaScript" marks={76} />
        </div>
      </section>
    </main>
  );
}

export default App;

import Description from "../component/description";
import ProjectsList from "../component/ProjectsList";
import CustomizedTimeline from "../component/Timeline";
const Home = () => {
  return (
    <div>
      <Description />
      <CustomizedTimeline />
      <ProjectsList />
    </div>
  );
};

export default Home;

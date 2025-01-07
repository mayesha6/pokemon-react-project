import Lottie from "lottie-react";
import loadingImg from "../../assets/loading.json"; 

const Loading = () => {
  return (
    <div>
      <Lottie animationData = {loadingImg} className="w-52 mx-auto my-32"/>
    </div>
  );
};

export default Loading;
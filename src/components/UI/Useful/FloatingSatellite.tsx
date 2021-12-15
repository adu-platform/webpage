import styled from "styled-components";
import { GiSatelliteCommunication } from "react-icons/gi";

const Frame = styled.div`
  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }

  .floating-object {
    overflow: hidden;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    animation: float 6s ease-in-out infinite;

    font-size: 100px;
  }
`;

function FloatingSatellite() {
  return (
    <Frame>
      <div className="floating-object">
        <GiSatelliteCommunication />
      </div>
    </Frame>
  );
}

export default FloatingSatellite;

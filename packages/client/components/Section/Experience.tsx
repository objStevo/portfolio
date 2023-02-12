import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Container } from "@mui/material";
import { useCallback, useMemo } from "react";

const Experience = (props) => {
  const options = useMemo(() => {
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: "#FAF9F9", // this sets a background color for the canvas
      },
      autoPlay: true,
      fullScreen: {
        enable: false, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: 0, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        color: {
          value: "#01BAEF",
        },
        links: {
          color: "#01BAEF",
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 2, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 3, max: 6 }, // let's randomize the particles size a bit
        },
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return (
    <Container
      maxWidth={false}
      component="section"
      disableGutters
      sx={{
        bgcolor: "#FAF9F9",
        height: "100vh",
        py: 10,
        position: "relative",
        px: 0,
      }}
      id="experience"
    >
      <Particles
        id={props.id}
        init={particlesInit}
        options={options}
        height={"500px"}
      />
    </Container>
  );
};

export default Experience;

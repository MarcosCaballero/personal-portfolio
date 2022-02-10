import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Projects = () => {
  //   Tomamos la localización actual del usuario
  const Location = useLocation();
  // Tomamos el estado de proyectos del store
  // const Store = useSelector(store => store)
  useEffect(() => {
    //   Llammamos los ultimos tres proyectos
    if (Location.pathname === "/") {
      //   Hacemos un dispath
    } else if (Location.pathname === "/projects") {
      // Hacemos un dispath para llamar a todos los proyectos
    } else {
      return;
    }
  }, []);
  return (
    <div>
      {Location.pathname !== "/" ? (
        <div>Hacer una mapeo de las últimos tres proyectos</div>
      ) : (
        <div>
          Hacer un mapeo de todos los proyectos (a definir si va a ser en orden
          ascendente o descendente)
        </div>
      )}
    </div>
  );
};

export default Projects;

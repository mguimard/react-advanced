import { useEffect, useRef } from "react";

const setTitle = (title) => {
  document.title = title;
};

export function useDocumentTitle(title) {
  // On garde en mémoire le titre original pour le réinitialiser
  // si le composant est démonté
  const titleRef = useRef(document.title);

  useEffect(() => {
    return () => {
      setTitle(titleRef.current);
    };
  }, []);

  useEffect(() => {
    setTitle(title ? title : titleRef.current);
  }, [title]);

  return setTitle;
}

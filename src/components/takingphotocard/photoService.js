const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "React POST Request Example" }),
  };

const photoService = {
  validatePhoto: () => {
    return fetch(
      "https://front-exercise.z1.digital/evaluations",
      requestOptions
    );
  },
};

export default photoService;
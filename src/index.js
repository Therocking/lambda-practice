exports.handler = async (event) => {
  console.log("Evento recibido:", JSON.stringify(event));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hola desde Lambda desplegada con CloudFormation + GitHub Actions 🚀",
      input: event,
    }),
  };
};

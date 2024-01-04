const URL = "http://51.178.136.89:8082";

// Authentication
export const SignInEndpoint = () => URL + "/api/auth/signin";

export const CreateCommandEndpoint = () => URL + "/api/command";

export const FetchCommandsEndpoint = (pageNumber, pageSize) => URL + "/api/command/" + pageNumber + "/" + pageSize;
// external
import fetch from "isomorphic-unfetch";

// internal
import cfg from "../config";

export const api = async resource => {
  const res = await fetch(`${cfg.apiEndpoint}${resource}`);
  checkResponse(res);

  return await res.json();
};

export default {
  posts: {
    all: async () => await api(`/posts`),
    get: async id => await api(`/posts/${id}`),
    comments: async id => await api(`/posts/${id}/comments`)
  }
};

function checkResponse(res) {
  if (Math.random() > 0.5) throw new Error("Funky!");

  if (!res.ok) {
    throw new Error(res.statusText);
  }
}

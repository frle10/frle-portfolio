import axios from 'axios';

export const UserRepos = async () => {
  const res = await axios.get(
    `https://api.github.com/users/frle10/repos?per_page=3&sort=created:asc&client_id=Iv1.be0eb92b8d9d0e48&client_secret=02813303a8617b2674cc98cf6edbbf8e17d3e319`
  );
  return res.data;
};

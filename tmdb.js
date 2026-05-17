const TMDB_API_KEY = '5afaeea7216a76d8c0600ecf217f6427';
const TMDB_BASE = 'https://api.themoviedb.org/3/';
const TMDB_IMAGE = 'https://image.tmdb.org/t/p/w500';

async function fetchTMDBDetails(seriesName) {
  try {
    const searchRes = await fetch(`${TMDB_BASE}search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(seriesName)}&language=ar-SA`);
    const searchData = await searchRes.json();
    if (!searchData.results || searchData.results.length === 0) return null;
    const tvId = searchData.results[0].id;
    const detailsRes = await fetch(`${TMDB_BASE}tv/${tvId}?api_key=${TMDB_API_KEY}&language=ar-SA&append_to_response=credits`);
    const details = await detailsRes.json();
    return {
      overview: details.overview || 'لا يوجد وصف',
      year: details.first_air_date ? details.first_air_date.split('-')[0] : 'غير معروف',
      rating: details.vote_average ? details.vote_average.toFixed(1) : '0',
      seasons: details.number_of_seasons || 0,
      episodes: details.number_of_episodes || 0,
      poster: details.poster_path ? TMDB_IMAGE + details.poster_path : null,
      genres: details.genres ? details.genres.map(g => g.name).join('، ') : '',
      cast: details.credits && details.credits.cast ? details.credits.cast.slice(0, 5).map(c => ({
        name: c.name, character: c.character,
        image: c.profile_path ? TMDB_IMAGE + c.profile_path : null
      })) : []
    };
  } catch(e) { return null; }
}
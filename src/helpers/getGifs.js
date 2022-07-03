export const getGifs = async(category) => {

    const apikey = '66kIYLRz2TynhyvM95m3DU02fKhVb8vt';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${ encodeURI(category)}&limit=10`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            imagen: img.images?.downsized_medium.url
        }
    });

    return gifs;
  }
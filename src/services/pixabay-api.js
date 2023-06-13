const securityKey = '35582471-f0842d41f87fce55fea8bc3c7';

function fetchPixabay(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${securityKey}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
}

export default fetchPixabay;

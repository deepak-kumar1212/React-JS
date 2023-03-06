export default function Imageurl(person){
    return (
        'https://i.imgur.com/' +
        person.imageId +
        person.size +
        '.jpg'
      );
}
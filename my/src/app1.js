export default function Gallery(){
   return( <div>
        <Profile/>
        <Profile/>
        <Profile/>
    </div>);
}
export function Profile(){
    return( (
        <img
          src="https://i.imgur.com/MK3eW3As.jpg"
          alt="Katherine Johnson"
        />
      ));
}
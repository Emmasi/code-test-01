interface ProfileCardProps {
  name: string;
  img: string;
  phonenr: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, img, phonenr }) => {
  return (
    <div className="flex justify-start items-end mb-8">
      <div className="mx-4 min-w-24">
        <img src={img} alt={'Bild på ' + name} />
      </div>
      <div className="mx-4">
        <h2 className="name flex">{name}</h2>
        <p>Email: {name + '@hotmail.com'}</p>
        <p>Phone number: {'0732-' + phonenr + phonenr}</p>
      </div>
    </div>
  )
}
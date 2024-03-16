import Image from 'next/image';

export const Logo: React.FC = () => {
  return (
    <div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/sesa-f250c.appspot.com/o/Sesalogo.webp?alt=media&token=03d992a6-034c-49a8-8f53-dcf7fef7f6b3"
        alt="Logo"
        width={110} // Set the width and height as per your requirement
        height={70}
      />
    </div>
  );
}

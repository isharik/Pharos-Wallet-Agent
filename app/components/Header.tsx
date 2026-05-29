import Image from 'next/image';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: '#f5f5f5'
    }}>
      <Image
        src="/pharos-logo.jpg"
        alt="Pharos Logo"
        width={300}
        height={150}
      />
    </header>
  );
}
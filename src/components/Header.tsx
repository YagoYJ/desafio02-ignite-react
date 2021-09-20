interface HeaderProps {
  selectedGenre: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.selectedGenre}</span>
      </span>
    </header>
  );
}

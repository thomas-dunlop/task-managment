import Badge from 'react-bootstrap/Badge';

export const badgeRenderer = (props) => (
  <div>
    {props.value.map((element) => (
      <Badge bg="" style={{ backgroundColor: element.background_colour, color: element.text_colour }}>{element.name}</Badge>
    ))}
  </div>
);

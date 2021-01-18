import DeleteIcon from '@material-ui/icons/Delete';
import { Card, List, ListItem, ListItemText } from '@material-ui/core/';
import './style.css';

const QueueList = ({ phoneList, onRemove }) => (
  <List className='queue-list'>
    {phoneList.map((element, index) => (
      <Card style={{ marginTop: 10 }}>
        <ListItem key={element.phone}>
          <ListItemText primary={element.name} secondary={element.phone} />
          <DeleteIcon
            className='queue-list-delete-icon'
            onClick={() => onRemove(index, element.phone)}
          />
        </ListItem>
      </Card>
    ))}
  </List>
);

export default QueueList;

import { useState, useMemo } from 'react';
import { StyledLink as Link } from 'baseui/link';
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic';
import { User } from '../../redux/actions/user-action-types';
import { Button, btnColors, btnShapes } from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

type userTableProps = {
  data: Array<User>,
  onClick: (row: any) => void,
  onDelete: (row: any) => void
}

/**
 * @typedef { Object } userTableProps
 * @property { Array<User> } data - Array of users displayed in a table.
 * @property { function } onClick - Function for determining behaviour on Click Event.
 * @property { function } onDelete - Function for determining behaviour on Click Event.
 */

/**
 * 
 * @param { userTableProps } props: - User table properties.
 * @returns 
 */

export const UserTable = (props: userTableProps) => {
  const [sortColumn, setSortColumn] = useState<keyof User>('id');
  const [sortAsc, setSortAsc] = useState(true);
  const { data, onClick, onDelete } = props

  // Sorting is made by help from docs of baseui table
  const sortedData = useMemo(() => {
    return data.slice().sort((a: User, b: User) => {
      const left: User = sortAsc ? a : b;
      const right = sortAsc ? b : a;
      const leftValue = String((sortColumn in left) ? left[sortColumn] : '');
      const rightValue = String((sortColumn in right) ? right[sortColumn] : '');
      return leftValue.localeCompare(rightValue, 'en', {
        numeric: true,
        sensitivity: 'base',
      });
    });
  }, [sortColumn, sortAsc, data]);

  const handleSort = (columnId: keyof User) => {
    if (columnId === sortColumn) {
      setSortAsc((asc: boolean) => !asc);
    } else {
      setSortColumn(columnId);
      setSortAsc(true);
    }
  }
  

  return (
    <div style={{ border: ' 1px solid #e5e5e5', borderRadius: '5px', padding: '5px' }}>
      <TableBuilder
            data={ sortedData }
            sortColumn={ sortColumn }
            sortOrder={ sortAsc ? 'ASC' : 'DESC' }
            onSort={ (id) => handleSort(id as keyof User) }
            emptyMessage={'No data available.'}
          >
            <TableBuilderColumn id="userId" header="ID" sortable>
              { (row: User) => <>{ row.id }</> }
            </TableBuilderColumn>
            <TableBuilderColumn id="name" header="Full Name" sortable>
              { (row: User) => <Link onClick={ () => onClick(row) }>{ row.name }</Link> }
            </TableBuilderColumn>
            <TableBuilderColumn id="email" header="Email" sortable>
              { (row: User) => <>{ row.email }</> }
            </TableBuilderColumn>
            <TableBuilderColumn id="delete" header="">
              { (row: User) => (
                <Button title='Delete User' shape={ btnShapes.square } color={ btnColors.transparent } onClick={ () => onDelete(row) }>
                  <FontAwesomeIcon icon={ faTrashCan } style={{color: "#ff0000"}} />
                </Button>
              ) }
            </TableBuilderColumn>
          </TableBuilder>
    </div>
  );
}
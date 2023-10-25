// external imports
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, SIZE } from 'baseui/modal'
import { Banner, HIERARCHY, KIND } from 'baseui/banner';
// import actions for user management
import { 
  getUsersRequest, 
  createUserRequest, 
  updateUserRequest, 
  deleteUserRequest 
 } from '../redux/actions/user-actions'
// import custom components
import { 
  Button, 
  btnColors as btnColors, 
  btnShapes as btnShapes 
 } from '../components/button/Button'
import { Input } from '../components/input/Input'
import { Title, titleSizes } from '../components/title/Title'
import { UserTable } from '../components/user-table/UserTable'

import '../styles/user-view.css'

enum ModalMode { 
  create = 'create',
  edit = 'edit'
 }

const emptyUser = { name: '', email: '', id: '' }

const Users = () => { 
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [modalMode, setModalMode] = useState<ModalMode>(ModalMode.create)
  const [user, setUser] = useState(emptyUser)

  const dispatch = useDispatch()
  
  const users = useSelector((state: any) => state.users.users)
  const userError = useSelector((state: any) => state.users.error )
  
  useEffect(() => { 
    dispatch(getUsersRequest())
  }, [dispatch])

  // state reset 
  const resetState = () => { 
    setUser(emptyUser)
    setModalOpen(false)
    setModalMode(ModalMode.create)
  }

  const createUser = () => { 
    dispatch(createUserRequest(user))
    if(!hasError) { 
      resetState()
    }
  }

  const updateUser = () => { 
    dispatch(updateUserRequest(user))
    resetState()
  }
  
  const updateRow = (row: any) => { 
    setUser(row)
    setModalMode(ModalMode.edit)
    setModalOpen(true)
  }

  const deleteUser = (row: any) => { 
    dispatch(deleteUserRequest({ id: row.id }))
    resetState()
  }

  const isModalModeCreate = modalMode === ModalMode.create
  const isSaveEnabled = user.name !== '' && user.email !== ''
  const hasError = userError !== '' && userError !== null
  
  // Modal could be moved to seperate component with lifted state, it is here for simplicity.
  return (
    <>
      <Modal isOpen={ isModalOpen } onClose={ () => resetState() } size={ SIZE.default }>
        <ModalHeader>
            { isModalModeCreate ? 'Add new user' : 'Edit user' }
        </ModalHeader>
        <ModalBody>
          <Input label={ 'Name' } placeholder={ 'Jhon' } value={ user } propName={ 'name' } onChange={ (e) => setUser({ ...user, name: e.target.value }) }/>
          <Input label={ 'Email' } placeholder={ 'jdoe@google.com' } value={ user } propName={ 'email' } onChange={ (e)=> setUser({ ...user, email: e.target.value }) }/>
        </ModalBody>
        <ModalFooter>
          <div className='modal-footer-buttons'>
            <Button title='Cancel Add User' shape={ btnShapes.default } onClick={ resetState } color={ btnColors.grey }>Cancel</Button>
            <Button title='Save User' shape={ btnShapes.default } onClick={ () => isModalModeCreate ? createUser() : updateUser() } color={ btnColors.magenta } disabled={ !isSaveEnabled }>
              Save
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      <Title text={ 'Users Management' } size={ titleSizes.xlarge } weight={ 700 } />
      { hasError && (
            <Banner hierarchy={ HIERARCHY.low } kind={ KIND.negative }>
              { `Something went wrong: ${ userError }` }
            </Banner>
          ) }
      <UserTable data={ users } onClick={ updateRow } onDelete={ deleteUser }/>
      <div className='container-buttons'>
        <Button title='Add user' shape={ btnShapes.pill } onClick={ () => setModalOpen(true) } color={ btnColors.magenta }>Add User </Button>
      </div>
    </>
  );
 }

export default Users

import React, { Fragment, useState } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mahasiswa from './Mahasiswa';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  let history = useNavigate();
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  let navigate = useNavigate();

  const handleEdit = (id, name, age, address, email) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Address', address);
    localStorage.setItem('Email', email);
    localStorage.setItem('Id', id);
  };

  const handleDelete = (id) => {
    setDeleteItemId(id);
    setShowDeleteModal(true);


  };

  const confirmDelete = () => {
    var index = Mahasiswa.findIndex((e) => e.id === deleteItemId);
    if (index !== -1) {
      Mahasiswa.splice(index, 1);
      // Show success notification if needed
    }

    setShowDeleteModal(false);
    setDeleteItemId(null);
    navigate('/home');
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteItemId(null);
  };

  return (
    <Fragment>
      <div style={{ margin: '10rem' }}>
        <h2>Data Mahasiswa</h2>
        <br></br>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Umur</th>
              <th>Alamat</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Mahasiswa && Mahasiswa.length > 0 ? (
              Mahasiswa.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Address}</td>
                    <td>{item.Email}</td>
                    <td>
                      <Link to={'/edit'}>
                        <Button
                          variant="success"
                          onClick={() =>
                            handleEdit(
                              item.id,
                              item.Name,
                              item.Age,
                              item.Address,
                              item.Email
                            )
                          }
                        >
                          EDIT
                        </Button>
                      </Link>
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        DELETE
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to="/create">
          <Button size="1g">Create</Button>
        </Link>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={cancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this item?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
    
  );
}

export default Home;
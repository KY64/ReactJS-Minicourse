import React from "react";
import { Navbar, EmptyData } from "../components";
import { formURL, productURL, price_formatter } from "../utils/utilities";
import { Form, FormGroup, Input, Table, Button } from "reactstrap";
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import axios from "axios";

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
      users: [],
      products: [],
      selectedID: null,
    };

    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.getProduct();
  }

  getProduct() {
    axios(productURL)
      .then((res) => this.setState({ products: res.data }))
      .catch((err) => this.setState({ isConnected: false }));
  }

  listProduct() {
    return this.state.products.map((v) => (
      <tr key={v.id}>
        <td>{v.id}</td>
        <td>{v.name}</td>
        <td>{v.category}</td>
        <td>{v.brand}</td>
        <td>{v.colour}</td>
        <td>IDR {price_formatter(v.price)}</td>
      </tr>
    ));
  }

  getUser() {
    axios(formURL)
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => this.setState({ isConnected: false }));
  }

  addUser() {
    this.username.value.length < 1
      ? void 0
      : this.address.value.length < 1
      ? void 0
      : this.job.value.length < 1
      ? void 0
      : this.hobby.value.length < 1
      ? void 0
      : axios
          .post(formURL, {
            nama: this.username.value,
            alamat: this.address.value,
            pekerjaan: this.job.value,
            hobi: this.hobby.value,
          })
          .then((res) => this.getUser())
          .catch((err) => console.error(err));
  }

  updateUser(user_id) {
    axios
      .patch(formURL + `/${user_id}`, {
        nama: this.new_username.value,
        alamat: this.new_address.value,
        pekerjaan: this.new_job.value,
        hobi: this.new_hobby.value,
      })
      .then((res) => this.getUser())
      .catch((err) => console.error(err));
  }

  removeUser(user_id) {
    axios
      .delete(formURL + `/${user_id}`)
      .then((res) => this.getUser())
      .catch((err) => console.error(err));
  }

  listUsers() {
    return this.state.users.map((v) => {
      if (v.id == this.state.selectedID)
        return (
          <tr key={v.id}>
            <td>{v.id}</td>
            <td>
              <Input defaultValue={v.nama} innerRef={value => this.new_username = value}/>
            </td>
            <td>
              <Input defaultValue={v.alamat} innerRef={value => this.new_address = value}/>
            </td>
            <td>
              <Input defaultValue={v.pekerjaan} innerRef={value => this.new_job = value}/>
            </td>
            <td>
              <Input type="select" defaultValue={v.hobi} innerRef={value => this.new_hobby = value}>
                <option value="Baca">Baca</option>
                <option value="Coding">Coding</option>
                <option value="Hangout">Hangout</option>
              </Input>
            </td>
            <td>
              <div style={{ width: "100px" }}>
                <Button
                  className="btn-danger"
                  onClick={() => this.setState({ selectedID: null })}
                >
                  <FaTimes />
                </Button>
                <Button
                  className="btn-success ml-3"
                  onClick={() => {
                    this.updateUser(v.id)
                    this.setState({ selectedID: null })
                  }}
                >
                  <FaCheck />
                </Button>
              </div>
            </td>
          </tr>
        );

      return (
        <tr key={v.id}>
          <td>{v.id}</td>
          <td>{v.nama}</td>
          <td>{v.alamat}</td>
          <td>{v.pekerjaan}</td>
          <td>{v.hobi}</td>
          <td>
            <Button onClick={() => this.setState({ selectedID: v.id })}>
              <FaEdit />
            </Button>
            <Button
              className="btn-danger ml-3"
              onClick={() => this.removeUser(v.id)}
            >
              <FaTrash />
            </Button>
          </td>
        </tr>
      );
    });
  }

  render() {
    if (!this.state.isConnected) return <EmptyData />;

    return (
      <>
        <header>
          <Navbar />
        </header>
        <main style={{ margin: "2rem 8rem" }}>
          <section id="form">
            <h4>Form</h4>
            <div
              className="w-100"
              style={{ borderBottom: "1px solid orange" }}
            />
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  id="nama"
                  placeholder="nama"
                  className="w-50 ml-5 my-4"
                  innerRef={(val) => (this.username = val)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  id="alamat"
                  placeholder="alamat"
                  className="w-50 ml-5 my-4"
                  innerRef={(val) => (this.address = val)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  id="pekerjaan"
                  placeholder="pekerjaan"
                  className="w-50 ml-5 my-4"
                  innerRef={(val) => (this.job = val)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="select"
                  id="hobi"
                  placeholder="hobi"
                  className="w-50 ml-5 my-4"
                  innerRef={(val) => (this.hobby = val)}
                >
                  <option>Choose...</option>
                  <option value="Baca">Baca</option>
                  <option value="Coding">Coding</option>
                  <option value="Hangout">Hangout</option>
                </Input>
              </FormGroup>
              <button
                type="button"
                className="bg-prime-h py-1 px-4 rounded text-white ml-5"
                onClick={this.addUser}
              >
                Submit
              </button>
            </Form>
          </section>
          <section id="table-user" className="mt-5">
            <h4>User</h4>
            <div
              className="w-100"
              style={{ borderBottom: "1px solid orange" }}
            />
            <Table>
              <thead className="orange">
                <th style={{ fontWeight: 500 }}>#</th>
                <th style={{ fontWeight: 500 }}>Nama</th>
                <th style={{ fontWeight: 500 }}>Alamat</th>
                <th style={{ fontWeight: 500 }}>Pekerjaan</th>
                <th style={{ fontWeight: 500 }}>Hobi</th>
                <th style={{ fontWeight: 500 }}>Action</th>
              </thead>
              <tbody>{this.listUsers()}</tbody>
            </Table>
          </section>
          <section id="table-product" className="mt-5">
            <h4>Product</h4>
            <div
              className="w-100"
              style={{ borderBottom: "1px solid orange" }}
            />
            <Table>
              <thead className="orange">
                <th style={{ fontWeight: 500 }}>#</th>
                <th style={{ fontWeight: 500 }}>Name</th>
                <th style={{ fontWeight: 500 }}>Category</th>
                <th style={{ fontWeight: 500 }}>Brand</th>
                <th style={{ fontWeight: 500, width:"120px" }}>Color</th>
                <th style={{ fontWeight: 500 }}>Price</th>
              </thead>
              <tbody>{this.listProduct()}</tbody>
            </Table>
          </section>
        </main>
        <style>{`
    input[type="text"]::placeholder {
      color: #ccc;
    }
    `}</style>
      </>
    );
  }
}

export default FormPage;

import './Admin.css';
import Header from '../../components/header/Header';
import TableComponent from '../../components/Table/TableComponent';

function AdminPage() {

    return (
        <div >
            <Header />
            <div className=' p-5'>
                <TableComponent />

            </div>
          
        </div>
    )

}
export default AdminPage;
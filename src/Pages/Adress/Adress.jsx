import data from '../../data/adress.json';

function Adress() {
    return (
        <div className="address">
            <h1>Address List</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <strong>{item.name}</strong>: {item.address.street}, {item.address.city}, {item.address.state}, {item.address.zip}, {item.address.country}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Adress;

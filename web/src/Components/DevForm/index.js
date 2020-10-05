import React, { useState, useEffect } from 'react';
import './styles.css';

function DevForm({ onSubmit }) {

    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (error) => {
                console.log(error);
            }, {
            timeout: 30000,
        }
        );
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setLatitude('');
        setLongitude('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do github</label>
                <input
                    name="github_username"
                    type="text"
                    id="github_username"
                    required
                    onChange={e => setGithub_username(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias </label>
                <input
                    name="techs"
                    type="text"
                    id="techs"
                    required
                    onChange={e => setTechs(e.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        name="latitude"
                        type="number"
                        id="latitude"
                        required
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        name="longitude"
                        type="number"
                        id="longitude"
                        required value={longitude}
                        onChange={e => setLongitude(e.target.value1)}
                    />
                </div>
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
}

export default DevForm;
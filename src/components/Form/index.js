import * as SC from './style';
import OrangeButton from '../Navbar/OrangeButton';
import axios from 'axios';
import { useState } from 'react';

const Form = () => {

    const [data, setData] = useState({
        advertiser: "",
        product: "",
        description: "",
        price: "",
        categorie: "",
    })

    const [photo, setPhoto] = useState(
            document.querySelector('#image')
        );


    const submit = () => {

        alert("Produto anunciado com sucesso!")


        let fd = new FormData()

        fd.append('advertiser', data.advertiser)
        fd.append('product', data.product)
        fd.append('description', data.description)
        fd.append('price', data.price)
        fd.append('categorie', data.categorie)
        fd.append('image', photo.files[0])

        axios({
            headers: {
                'content-type': 'multipart/form-data'
            },
            method: 'post',
            url: '/ad',
            data: fd,
        });
    }

    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    };

    function handleImageChange(e) {
        let fileField = document.querySelector('#' + e.target.id);
        setPhoto(fileField)
    };

    function handleReset(e) {
        const resetData = {
            advertiser: "",
            product: "",
            description: "",
            price: "",
            categorie: ""
        }
        setData(resetData)
    }

    return (
        <SC.FormStyle className="container">
            <h5>Preencha o formulário para cadastrar o seu produto</h5>

            <div className="row">
                <div className="col-lg-6 column-left">
                    <img src="./images/Newad-img.jpg" alt="Desapega" />
                </div>
                <div className="col-lg-6 column-right">
                    <form content-type="multipart/form-data" onSubmit={submit} id="postForm">

                        <input onChange={(e) => handle(e)}
                            value={data.advertiser}
                            type="text"
                            placeholder="Seu nome"
                            id="advertiser"
                            required />

                        <input onChange={(e) => handle(e)}
                            value={data.product}
                            type="text"
                            placeholder="Seu produto"
                            id="product"
                            required />

                        <textarea onChange={(e) => handle(e)}
                            value={data.description}
                            placeholder="Descrição"
                            id="description"
                            required>
                        </textarea>

                        <div className="double">
                            <div className="price-field">
                                <span>R$</span>
                                <input onChange={(e) => handle(e)}
                                    value={data.price}
                                    type="text"
                                    className="price"
                                    placeholder="Preço"
                                    id="price"
                                    required
                                />
                            </div>
                            <select onChange={(e) => handle(e)} value={data.categorie} id="categorie" required>
                                <option value="">Categoria:</option>
                                <option value="Imóveis">Imóveis</option>
                                <option value="Autos e peças">Autos e peças</option>
                                <option value="Para a sua casa">Para a sua casa</option>
                                <option value="Eletrônicos e celulares">Eletrônicos e celulares</option>
                                <option value="Vagas de emprego">Vagas de emprego</option>
                                <option value="Serviços">Serviços</option>
                                <option value="Músicas e hobbies">Músicas e hobbies</option>
                                <option value="Esportes e lazer">Esportes e lazer</option>
                                <option value="Moda e beleza">Moda e beleza</option>
                                <option value="Agro e indústria">Agro e indústria</option>
                            </select>
                        </div>
                        <div className="file-f">
                            <label htmlFor="file-field">Foto do produto <em>(.jpg)</em></label>
                            <input onChange={(e) => handleImageChange(e)}
                                type="file"
                                id="image"
                                accept="image/jpeg"
                                required />
                        </div>
                        <div className="buttons">
                            <OrangeButton text="Enviar" type="submit" />
                            <OrangeButton text="Limpar" type="reset" onClick={(e) => handleReset(e)} />
                        </div>
                    </form>
                </div>
            </div>
        </SC.FormStyle>
    )
}

export default Form;
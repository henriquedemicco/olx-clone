import CategorieItem from './CategorieItem';
import * as SC from './style';

const SearchArea = () => {
    return (
        <SC.SearchAreaStyle>
            <div className="search-field">
                <input type="text" 
                className="form-control" 
                placeholder="Estou procurando por..."
                />
                <span><i className="fas fa-search"></i></span>
            </div>

            <div className="categories-list">
                <ul>
                    <CategorieItem text="Imóveis" icon="fas fa-building" />
                    <CategorieItem text="Autos e peças" icon="fas fa-car"/>
                    <CategorieItem text="Para a sua casa" icon="fas fa-bed" />
                    <CategorieItem text="Eletrônicos e celulares" icon="fas fa-mobile-alt" />
                    <CategorieItem text="Vagas de emprego" icon="fas fa-user-tie" />
                    <CategorieItem text="Serviços" icon="fas fa-tools" />
                    <CategorieItem text="Músicas e hobbies" icon="fas fa-guitar" />
                    <CategorieItem text="Esportes e lazer" icon="fas fa-basketball-ball" />
                    <CategorieItem text="Moda e beleza" icon="fas fa-tshirt" />
                    <CategorieItem text="Agro e indústria" icon="fas fa-tractor" />
                </ul>
            </div>
        </SC.SearchAreaStyle>
    )
}

export default SearchArea;
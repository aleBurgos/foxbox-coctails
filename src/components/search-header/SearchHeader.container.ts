import {connect} from "react-redux";
import {changeSearchTerm, cancelSearch, selectCocktails} from "../../state/modules/cocktails";
import { SearchHeaderWithNavigation } from "./SearchHeader";

const mapDispatchToProps = { changeSearchTerm, cancelSearch};

function mapStateToProps(state: any) {
    return selectCocktails(state);
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(SearchHeaderWithNavigation);


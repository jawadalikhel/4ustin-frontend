import React, {useState} from 'react';
import FilterModal from "../components/UIElements/FilterModal";
import Button from "../components/FormElements/Button";

const useFilterModalHook = (categoryInfo, onCategorySelect) =>{
    const [showFilter, setShowFilter] = useState(null);

    const openFilterHandler = () => {
        setShowFilter(true);
    };

    const closeFilterHandler = () => {
        setShowFilter(false);
    };

    const FilterModalComponent = (
        <FilterModal 
            show={showFilter}
            onClick={closeFilterHandler}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeFilterHandler}>CLOSE</Button>}
            categoryInfo={categoryInfo}
            onCategorySelect={onCategorySelect}
        />
    );

    return {openFilterHandler, closeFilterHandler, FilterModalComponent};
}

export default useFilterModalHook;
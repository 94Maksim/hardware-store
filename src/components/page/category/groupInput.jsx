import React, { useState } from "react";
import propTypes from "prop-types";

const GroupInput = ({ name, setFilter, placeholderMin, placeholderMax }) => {
    const [isValid, setIsValid] = useState(true);

    return (
        <div className="filters__block">
            <p>{name}:</p>
            <form
                className="filters__block-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    const input1 = e.target[0].value;
                    const input2 = e.target[1].value;
                    if (input1 === "" || input2 === "") {
                        setIsValid(false);
                    } else if (Number(input1) > Number(input2)) {
                        setIsValid(false);
                    } else {
                        setIsValid(true);
                        setFilter("price", {
                            minPrice: input1,
                            maxPrice: input2
                        });
                    }
                }}
            >
                <div className="filters-block-inputs">
                    <input type="number" placeholder={placeholderMin} />
                    <span>-</span>
                    <input type="number" placeholder={placeholderMax} />
                </div>
                <div
                    className={
                        isValid
                            ? "filters-block-inputs-error-off"
                            : "filters-block-inputs-error-on"
                    }
                >
                    Заполните данные правильно
                </div>
                <button>Выбрать</button>
            </form>
        </div>
    );
};
GroupInput.propTypes = {
    name: propTypes.string.isRequired,
    setFilter: propTypes.func,
    placeholderMin: propTypes.string,
    placeholderMax: propTypes.string
};

export default GroupInput;

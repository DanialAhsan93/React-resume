import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ManageEducation } from '../../../redux/actions/Actions';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Input,
    HStack,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import { AiFillDelete } from 'react-icons/ai';
import Button from '../../Navbar/Button';
import { useState } from 'react';


export default function Education() {
   
    const [isEdit, setisEdit] = useState(0);
    const [index, setindex] = useState(0);
    const [num, setNum] = useState(1);
    const [val, setVal] = useState(0);
    const [toggle, settoggle] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [obj, setObj] = useState({});
    const [result0, setResult0] = useState("Marks");
    const [result1, setResult1] = useState("Marks");

    const dispatch = useDispatch()
    const education = useSelector((state) => state.educationreducer.education)

    let thismonth = new Date().getMonth() + 1
    const thisyear = new Date().getFullYear();
    if (thismonth > 10) {
        thismonth = `0${thismonth}`
    }
    const today = `${thisyear}-${thismonth}`;


    //----------------------------------

    const handleChange = (e, ind) => {

        setindex(ind);
        if (e.target.name == "type") {
            if (ind == 0) {
                setResult0(e.target.value);
            } else if (ind == 1) {
                setResult1(e.target.value);
            }
        }
        const { name, value } = e.target;

        setObj({ ...obj, [name]: value });

    };
    const deleteWork = (id) => {
        console.log('deleteWork called with id:', id);
        dispatch(ManageEducation((education.filter((elem, index) => index !== id))))
        const updatedEducation = education.filter((elem, index) => index !== id);
        const array = updatedEducation;
        const object = array[id];
        for (const key in object) {
            const elements = document.getElementsByName(key);
            for (const element of elements) {
                element.value = object[key];
            }
        }
        settoggle(true);
        if (val != 0) {
            setVal(val - 1);
        }
        setisEdit();
        setNum(1);
        if (id == 0) {
            setResult0("Marks");
        } else if (id == 1) {
            setResult1("Marks");
        }
    };

    const saveData = (id) => {
        const updatedWork = [...education];
        updatedWork[id] = obj;
        dispatch(ManageEducation(updatedWork));

        if (education.length < 3 || val < 2) {
            setVal(val + 1);
        }
        settoggle(true);
        setShowEdit(true);
        setisEdit();
        setNum(1);
    };
    console.log(saveData)

    const addMore = () => {
        education.push({});
        settoggle(false);
        setisEdit(education.length - 1);
    };
    const Edit = (id) => {
        const object = education[id];
        setObj(object);
        for (const key in object) {
            const elements = document.getElementsByName(key);
            for (const element of elements) {
                element.value = object[key];
            }
        }
        setisEdit(id);
    };
    return (
        <section>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo"
                        style={{ background: 'var(--bs-primary)', color: 'var(--bs-second)' }}>
                        <h5 className='m-0'>Education</h5>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">

                        <Accordion defaultIndex={[1]} allowToggle>
                            {education.map((education, index) =>
                            (
                                <AccordionItem key={index} opacity={isEdit == index ? 1 : 0.7}>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex="1" textAlign="left">
                                                <p className='m-0'
                                                    style={{
                                                        color: 'var(--bs-tertiary)',
                                                        fontWeight: '500',
                                                        fontSize: '16px'
                                                    }}>

                                                    {education.degree ? education.degree : 'Degree'}
                                                </p>

                                            </Box>
                                            <Box as="span" ml="auto">
                                                <button
                                                    color="red"
                                                    variant="link"
                                                >
                                                    <AiFillDelete
                                                        onClick={() => deleteWork(index)}
                                                        disabled={isEdit == index ? true : false}
                                                    />
                                                </button>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel ps={2} pb={4}>
                                        <div>
                                            <Input
                                                disabled={isEdit == index ? false : true}
                                                placeholder="Add qualification"
                                                type={"text"}
                                                name={"degree"}
                                                onChange={(e) => handleChange(e, index)}
                                                mb={3}
                                                ps={2}
                                            />

                                        </div>
                                        <div>
                                            <Input
                                                disabled={isEdit == index ? false : true}
                                                placeholder="School"
                                                type={"text"}
                                                name={"School"}
                                                onChange={(e) => handleChange(e, index)}
                                                mb={3}
                                                ps={2}
                                            />

                                        </div>
                                        <HStack mb={3} spacing={'80px'}>
                                            <label>
                                                Starting Date
                                            </label>

                                            <label>
                                                End date
                                            </label>

                                        </HStack>
                                        <HStack mb={3}>

                                            <Input
                                                disabled={isEdit == index ? false : true}
                                                placeholder="start date"
                                                type={"month"}
                                                name={"date"}
                                                onChange={(e) => handleChange(e, index)}

                                            />
                                            <Input
                                                disabled={isEdit == index ? false : true}
                                                placeholder="end date"
                                                type={"month"}
                                                name={"enddate"}

                                                onChange={(e) => handleChange(e, index)}

                                            />

                                        </HStack>

                                        <span onClick={() => { saveData(index); }}
                                            disabled={isEdit == index ? false : true} >
                                            <Button text='Save' />
                                        </span>

                                    </AccordionPanel>
                                </AccordionItem>
                            )
                            )}


                        </Accordion>
                        {education.length < 2 || val < 2
                            ? toggle && (
                                <button
                                    className="btn btn-primary"
                                    onClick={addMore}
                                >
                                    {/* <MdAddCircle
                                                        color="#007bff"
                                                        cursor={"pointer"}
                                                        fontSize={"25px"}
                                                    /> */}


                                    Add Education
                                </button>
                            )
                            : ""}
                    </div>
                </div>
            </div>

        </section>
    )
}

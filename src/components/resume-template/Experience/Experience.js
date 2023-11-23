import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Input,
    HStack
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Navbar/Button';
import { AiFillDelete } from 'react-icons/ai';
import { ManageExperience } from '../../../redux/actions/Actions';
import { AiOutlinePlusCircle } from 'react-icons/ai'
export default function Experience() {
    const [tempId, settempid] = useState(null)
    const [item, setitem] = useState(null)
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
    const experience = useSelector((state) => state.expertreducer.experience)


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
        dispatch(ManageExperience((experience.filter((elem, index) => index !== id))))
        const updatedexperience = experience.filter((elem, index) => index !== id);
        const array = updatedexperience;
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
        const updatedWork = [...experience];
        updatedWork[id] = obj;
        dispatch(ManageExperience(updatedWork));

        if (experience.length < 3 || val < 2) {
            setVal(val + 1);
        }
        settoggle(true);
        setShowEdit(true);
        setisEdit();
        setNum(1);
    };
    console.log(saveData)

    const addMore = () => {
        experience.push({});
        settoggle(false);
        setisEdit(experience.length - 1);
    };
    const Edit = (id) => {
        const object = experience[id];
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
        <>
            <section>
                <div className="container-fluid px-0">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id='item4'>
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false"
                                aria-controls="collapse4"
                                style={{ background: 'var(--bs-primary)', color: 'var(--bs-second)' }}>
                                <h5 className='m-0'>Experience</h5>
                            </button>
                        </h2>
                        <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                <Accordion defaultIndex={[1]} allowToggle>
                                    {experience.map((experience, index) =>
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

                                                            {experience.position ? experience.position : 'Position'}
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
                                                        placeholder="Position"
                                                        type={"text"}
                                                        name={"position"}
                                                        onChange={(e) => handleChange(e, index)}
                                                        mb={3}
                                                        ps={2}
                                                    />

                                                </div>
                                                <div>
                                                    <Input
                                                        disabled={isEdit == index ? false : true}

                                                        placeholder="Company"
                                                        type={"text"}
                                                        name={"company"}
                                                        onChange={(e) => handleChange(e, index)}
                                                        mb={3}
                                                        ps={2}
                                                    />

                                                </div>

                                                <div onClick={() => { saveData(index); }}
                                                    disabled={isEdit == index ? false : true}
                                                >
                                                    <Button text='Save' />
                                                </div>

                                            </AccordionPanel>
                                        </AccordionItem>
                                    )
                                    )}


                                </Accordion>
                                {experience.length < 2 || val < 2
                                    ? toggle && (
                                        <button className=" " onClick={addMore} >
                                           
                                            <div className="d-flex align-items-center">
                                                    <AiOutlinePlusCircle style={{color:'var(--bs-third)'}} />
                                                <span className='ps-1' style={{color:'var(--bs-third)', paddingBottom:'3px'}}>
                                                    add experience
                                                </span>

                                            </div>

                                        </button>
                                    )
                                    : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

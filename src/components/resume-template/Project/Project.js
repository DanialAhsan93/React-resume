import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    HStack,
    Textarea,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ManageProject } from '../../../redux/actions/Actions';
import { AiFillDelete } from 'react-icons/ai';


export default function Project() {
    const [index, setindex] = useState(0);
    const [obj, setobj] = useState({});
    const [toggle, settoggle] = useState(false);
    const [val, setVal] = useState(0);
    const [edit, setedit] = useState(0)


    const dispatch = useDispatch()

    const project = useSelector((state) => state.projectreducer.project);

    const handleChange = (e, ind) => {
        setindex(ind)
        const { name, value } = e.target
        setobj({ ...obj, [name]: value })
    }

    const save = (id) => {
        const updatedWork = [...project]
        updatedWork[id] = obj
        console.log(obj)
        dispatch(ManageProject(updatedWork))
        if (project.length < 4 || val < 2) {
            setVal(val + 1);
        }
        settoggle(true)
        setedit()

    }

    const addmore = () => {
        project.push({})
        settoggle(false)
        setedit(project.length -1)

    }
    const deleteWork = (id) => {
        dispatch(ManageProject(project.filter((elem, index) => index !== id)))
        settoggle(true)
    }


    return (
        <>
            <section>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false"
                            aria-controls="collapse5"
                            style={{ background: 'var(--bs-primary)', color: 'var(--bs-second)' }}>
                            <h5 className='m-0'>Project</h5>
                        </button>
                    </h2>
                    <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <Accordion defaultIndex={[1]} allowToggle key={index}>
                                {project.map((project, index) => (
                                    <AccordionItem key={index} opacity={edit == index ? 1 : 0.7}>
                                        <>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        {project.projectname ? project.projectname : 'Project' }
                                                    </Box>
                                                    <AiFillDelete
                                                        onClick={() => deleteWork(index)}
                                                    />
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>

                                            <AccordionPanel pb={4}>
                                                <Input
                                                    placeholder='Project Name'
                                                    mb={3}
                                                    ps={2}
                                                    type='text'
                                                    name='projectname'
                                                    onChange={(e) => handleChange(e, index)}
                                                    disabled={edit == index ? false : true}
                                                />
                                                <Input
                                                    placeholder='Project Url'
                                                    mb={3}
                                                    ps={2}
                                                    name='url'
                                                    type={'text'}
                                                    onChange={(e) => handleChange(e, index)}
                                                    disabled={edit == index ? false : true}

                                                />

                                                <Textarea
                                                    placeholder='Small description' name='description'
                                                    type='text'
                                                    onChange={(e) => handleChange(e, index)}
                                                    disabled={edit == index ? false : true}

                                                />
                                                <button className='btn btn-primary'
                                                    onClick={() => {save (index);}}
                                                    disabled={edit == index ? false : true}
                                                    >
                                                    Save
                                                </button>
                                            </AccordionPanel>
                                        </>

                                    </AccordionItem>
                                ))}


                                {project.length < 4 || val < 2 ?
                                    toggle && (
                                        <>
                                            <button className='btn btn-primary mt-2' onClick={addmore}>
                                                add project
                                            </button>

                                        </>
                                    ) :
                                    ''}

                            </Accordion>

                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

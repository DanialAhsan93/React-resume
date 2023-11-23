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
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Managelanguage } from '../../../redux/actions/Actions';
import { AiFillDelete } from 'react-icons/ai';

export default function Language() {
    const [index, setindex] = useState(0);
    const [obj, setobj] = useState({});
    const [toggle, settoggle] = useState(false);
    const [val, setVal] = useState(0);
    const [edit, setedit] = useState(0)
    const [languages, setlanguages] = useState('')

    const dispatch = useDispatch()

    const language = useSelector((state) => state.languagereducer.languages)

    const handlechange = (e) => {
        setlanguages(e.target.value)
    }
    const handlelanguage = () => {
        let updatedwork = [...language]
        updatedwork[index] = {languages}
        dispatch(Managelanguage(updatedwork))
        setindex(index + 1)
    }
    const deleteWork = (id) => {
        dispatch(Managelanguage( language.filter((elem,index) => index !== id)))
        if (index != id) {
            setindex(index - 1)
        }
    }
    return (
        <section>
            <div className="accordion-item">
                <h2 className="accordion-header" id='item6'>
                    <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false"
                        aria-controls="collapse6"
                        style={{ background: 'var(--bs-primary)', color: 'var(--bs-second)' }}>
                        <h5 className='m-0'>Language</h5>
                    </button>
                </h2>
                <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <HStack alignItems={'center'}>
                            <Input
                                placeholder='Project Name'

                                type='text'
                                name='language'
                            onChange={handlechange}
                            value={languages}
                            />
                            <button className='btn btn-primary'
                            onClick={() => {handlelanguage (index);}}
                            >
                                Save
                            </button>

                        </HStack>
                        <HStack spacing={4}>

                            {language.length > 0 ?
                                (
                                    <>
                                        {language.map((language, index) => (
                                            <div className='mt-3'>
                                                <Tag
                                                    size={'lg'}
                                                    key={index}
                                                    borderRadius='full'
                                                    variant='solid'
                                                    colorScheme='green'
                                                >
                                                    <TagLabel>{language?.languages}</TagLabel>
                                                    <TagCloseButton 
                                                    onClick={() => deleteWork(index)}/>
                                                </Tag>

                                            </div>

                                        ))}

                                    </>
                                )
                                :
                                ('')}
                        </HStack>


                    </div>
                </div>
            </div>

        </section>

    )
}

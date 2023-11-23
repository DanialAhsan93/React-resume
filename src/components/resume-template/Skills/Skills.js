import React, { useState } from 'react';
import './skills.css';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HStack } from '@chakra-ui/react';
import { ManageSkill } from '../../../redux/actions/Actions';


export default function Skills(props) {

    const [range, setrange] = useState(40);
    const [skills, setskills] = useState("");
    const [index, setindex] = useState(0);


    const dispatch = useDispatch()

    const skill = useSelector((state) => state.skillreducer.skills);
    const toast = useToast()




    const handlechange = (e) => {
        if (e?.target?.name === "skill") {
            setskills(e.target.value)
        } else {
            setrange(e);
        }
    }
    const handleskill = (e) => {
        e.preventDefault()
        if (!skills || !range) {
            toast({
                title: 'Skills field is empty',
                colorScheme: 'red',
                isClosable: true,
            })
            return;
        }
        if (skill.length >= 4) {
            toast({
                title: 'You can only add upto 4',
                colorScheme: 'blue',
                isClosable: true,
            })
            return;
        }
        // if (index != 0) {
        //     skill.push({});
        // }
        let updatedWork = [...skill]
        updatedWork[index] = { skills, range }
        console.log(updatedWork)
        dispatch(ManageSkill(updatedWork))
        setskills("")
        setrange(40)
        setindex(index + 1)
    }

    const deleteWork = (id) => {
        dispatch(ManageSkill(skill.filter((elem, index) => index !== id)));
        if (index != id) {
            setindex(index - 1)
        }
    }

    return (
        <>
            <section>
                <div className="contanier-fluid">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id='item3'>
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false"
                                aria-controls="collapse3"
                                style={{ background: 'var(--bs-primary)', color: 'var(--bs-second)' }}>
                                <h5 className='m-0'>Skills</h5>
                            </button>
                        </h2>
                        <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                <form onSubmit={handleskill} >
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <Input
                                                variant='unstyled'
                                                placeholder='Skills'
                                                bg={'var(--bs-sixth)'}
                                                onChange={handlechange}
                                                name="skill"
                                                py={2}
                                                ps={2}
                                                value={skills}
                                            />

                                        </div>
                                        <div className="col-md-5">
                                            <div style={{ display: 'none' }}>
                                                <Slider
                                                    aria-label='slider-ex-4'
                                                    value={range}
                                                    onChange={handlechange}
                                                >
                                                    <SliderTrack bg='lightgrey' py={4}
                                                    >
                                                        <SliderFilledTrack
                                                            bg='var(--bs-primary)'
                                                            py={4}

                                                        />
                                                    </SliderTrack>
                                                </Slider>

                                            </div>

                                            <div className='pt-0'>
                                                <Slider
                                                    aria-label='slider-ex-4'
                                                    value={range}
                                                    onChange={handlechange}
                                                    min={0}
                                                    max={100}
                                                >
                                                    <SliderTrack bg='red.100' >
                                                        <SliderFilledTrack
                                                            bg='tomato'
                                                        />
                                                    </SliderTrack>
                                                    <Tooltip
                                                        label={range <= 25 ? 'noive' : range <= 35 ? 'begginer' : range <= 55 ? 'skilled' : range > 55 ? 'expert' : ''}
                                                        aria-label='A tooltip'
                                                        placement='top'
                                                    >
                                                        <SliderThumb boxSize={6}>
                                                            <Box color='tomato' as={AiOutlineUserAdd} />
                                                        </SliderThumb>
                                                    </Tooltip>
                                                </Slider>

                                            </div>
                                        </div>
                                        <div className="col-md-2 ps-4">
                                            <Button Icon={<AiOutlinePlus />}
                                                bg={'var(--bs-sixth)'}
                                                variant='ghost'
                                                type='submit'
                                            >
                                                <AiOutlinePlus />
                                            </Button>

                                        </div>
                                    </div>





                                </form>
                                {/* <button className='btn btn-primary'
                                                            data={"Save"}
                                                            onClick={() => {
                                                                saveData(index);
                                                            }}
                                                            disabled={isEdit == index ? false : true}
                                                        >Save </button> */}

                                <Box 
                                border={'1px'}
                                borderColor='gray.200'
                                mt={2}>
                                    <HStack spacing={4} py={4}>

                                        {skill?.length > 0 ? (
                                            <>
                                                {skill.map((skill, index) => (
                                                    <Tag
                                                        size={'lg'}
                                                        // key={index}
                                                        borderRadius='full'
                                                        variant='solid'
                                                        colorScheme='green'
                                                        key={index}
                                                    >

                                                        <TagLabel>{skill.skills}</TagLabel>
                                                        <TagCloseButton
                                                            onClick={() => deleteWork(index)} />
                                                    </Tag>
                                                ))}
                                            </>
                                        ) :
                                            (
                                                ''
                                            )
                                        }

                                    </HStack>

                                </Box>





                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

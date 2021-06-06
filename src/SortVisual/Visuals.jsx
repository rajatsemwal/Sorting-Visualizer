import React from 'react'
import './Visuals.css'
import { useState } from 'react'
import RangeSlider from 'react-bootstrap-range-slider';
import {getMergeSortAnimations, getInsertionSortAnimations, getHeapSortAnimations, getBubbleSortAnimations} from '../SortingAlgorithms/sortingalgo'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ANIMATION_SPEED_MS = 7
const NUMBER_OF_ARRAY_BARS = 180
const PRIMARY_COLOR = 'teal'
const SECONDARY_COLOR = 'red'

export default class Visuals extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            array: [],
        }
    }

    componentDidMount() {
        this.resetarray()
    }
    resetarray() {
        const array = []
        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomnumbers(5, 123))
        }
        this.setState({array})
    }

    mergeSort() {

        const animations = getMergeSortAnimations(this.state.array)

        for(let i = 0; i < animations.length; i++) {
            
            const arrayBars = document.getElementsByClassName('array-bar')
            const isColorChange = i%3 !== 2

            if(isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i]

                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style

                const color = i%3 === 0 ? SECONDARY_COLOR : 'turquoise'
                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color    
                }, i * ANIMATION_SPEED_MS)
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                }, i * ANIMATION_SPEED_MS)
            }
        }
    }

    heapSort() {

        const [animations,count] = getHeapSortAnimations(this.state.array)
        for (let i = 0; i< count; i++){

            const arrayBars = document.getElementsByClassName('array-bar')
            const [barOneIdx, barTwoIdx] = animations[i]
            console.log(animations[i])

            const barOneStyle = arrayBars[barOneIdx].style
            const barTwoStyle = arrayBars[barTwoIdx].style

            const color = i % 3 === 0 ? SECONDARY_COLOR : 'turquoise'
            setTimeout(() => {
            
                barOneStyle.backgroundColor = color
                barTwoStyle.backgroundColor = color
            }, i * ANIMATION_SPEED_MS)
        }
        
        for (let i = count + 1; i < animations.length; i++) {
            
            const arrayBars = document.getElementsByClassName('array-bar')
            const isColorChange = i % 3 !== 2
            
            if (isColorChange) {
                    
                const [barOneIdx, barTwoIdx] = animations[i]
                console.log(animations[i])
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style

                const color = i % 3 === 0 ? SECONDARY_COLOR : 'turquoise'
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                }, i * ANIMATION_SPEED_MS)
            } 
            else {
            
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                }, i * ANIMATION_SPEED_MS)
            }
        }
    }

    bubbleSort() {

        const animations = getBubbleSortAnimations(this.state.array)
        for(let i = 0; i < animations.length; i++) {
            
            const arrayBars = document.getElementsByClassName('array-bar')
            if(animations[i] === null) continue

            const isColorChange = i%3 !== 2
            if(isColorChange) {

                const [barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = i%3 === 0 ? SECONDARY_COLOR : 'turquoise'

                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color    
                }, i * ANIMATION_SPEED_MS)
            }
            else {
		    
                if(animations[i].length === 4) {
			setTimeout(() => {

				const [barOneIdx, barTwoIdx, newHeight1, newHeight2] = animations[i]
				const barOneStyle = arrayBars[barOneIdx].style
				const barTwoStyle = arrayBars[barTwoIdx].style
				barOneStyle.height = `${newHeight2}px`
				barTwoStyle.height = `${newHeight1}px`
				
		}, i * ANIMATION_SPEED_MS)
            }
		else {

			setTimeout(() => {
		
				const [barOneIdx, newHeight] = animations[i]
				const barOneStyle = arrayBars[barOneIdx].style
				barOneStyle.height = `${newHeight}px`
			}, i * ANIMATION_SPEED_MS)
		}	
            }
        }
    }

    insertionSort() {

        const animations = getInsertionSortAnimations(this.state.array)
        
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar')
            const isColorChange = i % 3 !== 2
          
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = i % 3 === 0 ? SECONDARY_COLOR : 'turquoise'
          
                setTimeout(() => {
              
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                }, i * ANIMATION_SPEED_MS)
            } 
            else {
            
                setTimeout(() => {
                    
                    const [barOneIdx, newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                }, i * ANIMATION_SPEED_MS)
            }
        }
    }

    render() {
        const {array} = this.state;
        const navbarInstance = (
            <>
    <Navbar bg="dark" variant="dark">
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button onClick={() => refreshPage()}>Generate New Array</button>
        
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
        
        <Navbar.Brand href="#home">Sorting Visualizer</Navbar.Brand>
        
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        
        <Nav className="ml-auto">
            <button onClick={() => this.mergeSort()}>Merge Sort: O(n log(n))</button>
            &nbsp;&nbsp;&nbsp; 
            <button onClick={() => this.insertionSort()}>Insertion Sort: O(n²)</button>
            &nbsp;&nbsp;&nbsp; 
            <button onClick={() => this.heapSort()}>Heap Sort: O(n log(n))</button>
            &nbsp;&nbsp;&nbsp; 
            <button onClick={() => this.bubbleSort()}>Bubble Sort: O(n²)</button>
            
        </Nav>
        
    </Navbar>
    
    </>

        );
        return (
        <div>

            {navbarInstance}
        <div className="array-container">
            
            {array.map((value, idx) => (
            <div
                className="array-bar"
                key={idx}
                style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,

                }}></div>
                

            ))}
            
            {/* \*<button onClick={() => this.testSortingAlgorithms()}>
            //Test Sorting Algorithms
            </button> */}
        </div>
        </div>  
        );
    }
    }

    function randomnumbers(min, max) {
        return Math.floor(Math.random() * (max - min + 1) * min)
    }

    function arraysAreEqual(array1, array2) {

        if(array1.length !== array2.length) return false;

        for(let i = 0; i < array1.length; i++)
            if(array1[i] !== array2[i]) return false;

        return true
    }

    function refreshPage() {
        window.location.reload(false);
    }

    const MyComponent = () => {

        const [ value, setValue ] = useState(0); 
    
        return (
        <RangeSlider
            value={value}
            onChange={changeEvent => setValue(changeEvent.target.value)}
        />
        )
    
    }

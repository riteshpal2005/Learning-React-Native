import { useState, useEffect } from "react";
// ==========================================
// Phase 2, Topic 1: Components & JSX
// ==========================================
// const WelcomeCard = () => {
//     const name = 'Ritesh';

//     return (
//         <view>
//             <text>Hello, {name}</text>
//         </view>
//     );
// };

// const UserProfile = () => {
//     const username = 'Stuti';

//     return (
//         <view>
//             <text>User: {username}</text>
//         </view>
//     );
// };

// ==========================================
// Phase 2, Topic 2: Props vs State (Props)
// ==========================================
// const Greeting = ({ username }) => {
//     return <text>Welcom back, {username}!</text>
// };

// const App = () => {
//     return (
//         <view>
//             <Greeting username='Ritesh'/>
//             <Greeting username='Stuti'/>
//         </view>
//     );
// };

// interface ProfileProps {
//     firstName: string;
//     lastName: string;
// }

// const ProfileCard = ({ firstName, lastName }: ProfileProps) => {
//     return (
//         <view>
//             <text>
//                 Profile: {firstName} {lastName}
//             </text>
//         </view>
//     );
// };

// const  App = () => {
//     return (
//         <view>
//             <ProfileCard firstName='Ritesh' lastName='Pal'/>
//             <ProfileCard firstName='Stuti' lastName='Katiyar'/>
//         </view>
//     );
// };

// ==========================================
// Phase 2, Topic 3: State (useState Hook)
// ==========================================
// const Counter = () => {
//     const [count, setCount] = useState(0)

//     return (
//         <view>
//             <text>
//                 <button onProgress={() => {setCount(count + 1)}} title='Increase' />
//             </text>
//         </view>
//     );
// };

// const ToggleSwitch = () => {
//     const [isOn, setIsOn] = useState(false);

//     return (
//         <view>
//             <text>
//                 Status: {isOn ? 'ON' : 'OFF'}
//             </text>
//         </view>
//     );
// };

// ==========================================
// Phase 2, Topic 4: Side Effects (useEffect Hook)
// ==========================================
// const DataFetcher = () => {
//     const [status, setStatus] = useState('Loading...');

//     useEffect(() => {
//         setTimeout(() => {
//             setStatus('Data fully loaded!');
//         }, 2000);
//     }, []);

//     return (
//         <view>
//             <text>{status}</text>
//         </view>
//     );
// };

// const TimeComponent = () => {
//     const [seconds, setSeconds] = useState(0);

//     useEffect(() => {
//         setInterval(() => setSeconds(s => s + 1), 1000);
//     }, []);

//     return (
//         <view>
//             <text>Seconds: {seconds}</text>
//         </view>
//     );
// };

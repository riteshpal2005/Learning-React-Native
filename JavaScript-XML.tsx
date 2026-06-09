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

interface ProfileProps {
    firstName: string;
    lastName: string;
}

const ProfileCard = ({ firstName, lastName }: ProfileProps) => {
    return (
        <view>
            <text>
                Profile: {firstName} {lastName}
            </text>
        </view>
    );
};

const  App = () => {
    return (
        <view>
            <ProfileCard firstName='Ritesh' lastName='Pal'/>
            <ProfileCard firstName='Stuti' lastName='Katiyar'/>
        </view>
    );
};
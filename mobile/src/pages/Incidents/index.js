import React,{useEffect,useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {FlatList,View,Image,Text,TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import api from '../../services/api';
export default function Incidents(){
    const navigation = useNavigation();
    const [incidents,setIncidents] = useState([]);
    const [total,setTotal] = useState(0);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(false);
    async function loadIncidents(){
        if(loading){
            return ;
        }
        if(total>0 && incidents.length===total){
            return;
        }
        setLoading(true);
        const response = await api.get('incidents',{
            params:{page}
        });
        
        setIncidents([...incidents,...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);
    }
    useEffect(()=>{
        loadIncidents();
    },[]);
    function navigateToDetail(incident){
        navigation.navigate('Detail',{incident});
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            <FlatList
                style={styles.incidentList} 
                data={incidents}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.4}
                showsVerticalScrollIndicator={true}
                keyExtractor={incident => `${incident.id}`}
                renderItem={({item:incident})=>(
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>
                            ONG:
                        </Text>
                        <Text style={styles.incidentValue}>
                            {incident.name}
                        </Text>
                        <Text style={styles.incidentProperty}>
                            CASO:
                        </Text>
                        <Text style={styles.incidentValue}>
                        {incident.title}
                        </Text>
                        <Text style={styles.incidentProperty}>
                            VALOR:
                        </Text>
                        <Text style={styles.incidentValue}>
                        R$ {incident.value}
                        </Text>
                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={()=>navigateToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#FFFFFF"/>
                        </TouchableOpacity>
                    </View>
                )}
            />
            
        </View>
    );
}
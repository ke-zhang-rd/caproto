Search.setIndex({docnames:["api","async-clients","basics","command-line-client","index","install","iocs","loggers","mock-records","protocol-compliance","pyepics-compat-client","references","release-notes","servers","sync-client","threading-client"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["api.rst","async-clients.rst","basics.rst","command-line-client.rst","index.rst","install.rst","iocs.rst","loggers.rst","mock-records.rst","protocol-compliance.rst","pyepics-compat-client.rst","references.rst","release-notes.rst","servers.rst","sync-client.rst","threading-client.rst"],objects:{"caproto.AccessRightsResponse":{access_rights:[0,2,1,""],cid:[0,2,1,""]},"caproto.Beacon":{address:[0,2,1,""],address_string:[0,2,1,""],beacon_id:[0,2,1,""],server_port:[0,2,1,""],version:[0,2,1,""]},"caproto.Broadcaster":{log:[0,2,1,""],new_search_id:[0,3,1,""],our_role:[0,2,1,""],process_commands:[0,3,1,""],recv:[0,3,1,""],register:[0,3,1,""],search:[0,3,1,""],send:[0,3,1,""]},"caproto.ClearChannelRequest":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClearChannelResponse":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClientChannel":{clear:[0,3,1,""],client_name:[0,3,1,""],create:[0,3,1,""],host_name:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ClientNameRequest":{name:[0,2,1,""]},"caproto.CreateChFailResponse":{cid:[0,2,1,""]},"caproto.ErrorResponse":{cid:[0,2,1,""],status:[0,2,1,""]},"caproto.EventAddRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],high:[0,2,1,""],low:[0,2,1,""],mask:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""],to:[0,2,1,""]},"caproto.EventAddResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelRequest":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelResponse":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.HostNameRequest":{name:[0,2,1,""]},"caproto.NotFoundResponse":{cid:[0,2,1,""],version:[0,2,1,""]},"caproto.ReadNotifyRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ReadNotifyResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],status:[0,2,1,""]},"caproto.RepeaterConfirmResponse":{repeater_address:[0,2,1,""]},"caproto.RepeaterRegisterRequest":{client_address:[0,2,1,""]},"caproto.SearchRequest":{cid:[0,2,1,""],name:[0,2,1,""],payload_size:[0,2,1,""],reply:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchResponse":{cid:[0,2,1,""],ip:[0,2,1,""],port:[0,2,1,""],version:[0,2,1,""]},"caproto.ServerChannel":{clear:[0,3,1,""],create:[0,3,1,""],create_fail:[0,3,1,""],disconnect:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ServerDisconnResponse":{cid:[0,2,1,""]},"caproto.VersionRequest":{priority:[0,2,1,""],version:[0,2,1,""]},"caproto.VersionResponse":{version:[0,2,1,""]},"caproto.VirtualCircuit":{disconnect:[0,3,1,""],host:[0,2,1,""],key:[0,2,1,""],log:[0,2,1,""],new_channel_id:[0,3,1,""],new_ioid:[0,3,1,""],new_subscriptionid:[0,3,1,""],our_role:[0,2,1,""],port:[0,2,1,""],process_command:[0,3,1,""],recv:[0,3,1,""],send:[0,3,1,""]},"caproto.WriteNotifyRequest":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],sid:[0,2,1,""]},"caproto.WriteNotifyResponse":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""]},"caproto.server.records":{AaiFields:[8,1,1,""],AaoFields:[8,1,1,""],AcalcoutFields:[8,1,1,""],AiFields:[8,1,1,""],AoFields:[8,1,1,""],AsubFields:[8,1,1,""],AsynFields:[8,1,1,""],BiFields:[8,1,1,""],BoFields:[8,1,1,""],BusyFields:[8,1,1,""],CalcFields:[8,1,1,""],CalcoutFields:[8,1,1,""],CompressFields:[8,1,1,""],DfanoutFields:[8,1,1,""],DigitelFields:[8,1,1,""],EpidFields:[8,1,1,""],EventFields:[8,1,1,""],FanoutFields:[8,1,1,""],GensubFields:[8,1,1,""],HistogramFields:[8,1,1,""],LonginFields:[8,1,1,""],LongoutFields:[8,1,1,""],MbbiFields:[8,1,1,""],MbbidirectFields:[8,1,1,""],MbboFields:[8,1,1,""],MbbodirectFields:[8,1,1,""],MotorFields:[8,1,1,""],PermissiveFields:[8,1,1,""],RecordFieldGroup:[8,1,1,""],ScalcoutFields:[8,1,1,""],ScanparmFields:[8,1,1,""],SelFields:[8,1,1,""],SeqFields:[8,1,1,""],SscanFields:[8,1,1,""],SseqFields:[8,1,1,""],StateFields:[8,1,1,""],StringinFields:[8,1,1,""],StringoutFields:[8,1,1,""],SubFields:[8,1,1,""],SubarrayFields:[8,1,1,""],SwaitFields:[8,1,1,""],TableFields:[8,1,1,""],TimestampFields:[8,1,1,""],TransformFields:[8,1,1,""],VmeFields:[8,1,1,""],VsFields:[8,1,1,""],WaveformFields:[8,1,1,""]},"caproto.sync.client":{Subscription:[14,1,1,""],block:[14,4,1,""],interrupt:[14,4,1,""],read:[14,4,1,""],read_write_read:[14,4,1,""],subscribe:[14,4,1,""],write:[14,4,1,""]},"caproto.sync.client.Subscription":{add_callback:[14,3,1,""],block:[14,3,1,""],clear:[14,3,1,""],interrupt:[14,3,1,""],process:[14,3,1,""],remove_callback:[14,3,1,""]},"caproto.threading.client":{Batch:[15,1,1,""],Context:[15,1,1,""],PV:[15,1,1,""],SharedBroadcaster:[15,1,1,""],Subscription:[15,1,1,""],VirtualCircuitManager:[15,1,1,""]},"caproto.threading.client.Batch":{read:[15,3,1,""],write:[15,3,1,""]},"caproto.threading.client.Context":{get_pvs:[15,3,1,""]},"caproto.threading.client.PV":{go_idle:[15,3,1,""],read:[15,3,1,""],subscribe:[15,3,1,""],unsubscribe_all:[15,3,1,""],wait_for_search:[15,3,1,""],write:[15,3,1,""]},"caproto.threading.client.SharedBroadcaster":{cancel:[15,3,1,""],get_cached_search_result:[15,3,1,""],received:[15,3,1,""],search:[15,3,1,""],search_now:[15,3,1,""],send:[15,3,1,""]},"caproto.threading.client.Subscription":{add_callback:[15,3,1,""],clear:[15,3,1,""],remove_callback:[15,3,1,""]},"caproto.threading.client.VirtualCircuitManager":{events_off:[15,3,1,""],events_on:[15,3,1,""],received:[15,3,1,""]},caproto:{AWAIT_CREATE_CHAN_RESPONSE:[0,0,1,""],AWAIT_SEARCH_RESPONSE:[0,0,1,""],AWAIT_VERSION_RESPONSE:[0,0,1,""],AccessRightsResponse:[0,1,1,""],Beacon:[0,1,1,""],Broadcaster:[0,1,1,""],CLIENT:[0,0,1,""],CLOSED:[0,0,1,""],CONNECTED:[0,0,1,""],ChannelType:[0,1,1,""],ClearChannelRequest:[0,1,1,""],ClearChannelResponse:[0,1,1,""],ClientChannel:[0,1,1,""],ClientNameRequest:[0,1,1,""],CreateChFailResponse:[0,1,1,""],DISCONNECTED:[0,0,1,""],EchoRequest:[0,1,1,""],EchoResponse:[0,1,1,""],ErrorResponse:[0,1,1,""],EventAddRequest:[0,1,1,""],EventAddResponse:[0,1,1,""],EventCancelRequest:[0,1,1,""],EventCancelResponse:[0,1,1,""],EventsOffRequest:[0,1,1,""],EventsOnRequest:[0,1,1,""],FAILED:[0,0,1,""],HostNameRequest:[0,1,1,""],IDLE:[0,0,1,""],LocalProtocolError:[0,1,1,""],MUST_CLOSE:[0,0,1,""],NEED_DATA:[0,0,1,""],NotFoundResponse:[0,1,1,""],REQUEST:[0,0,1,""],RESPONSE:[0,0,1,""],ReadNotifyRequest:[0,1,1,""],ReadNotifyResponse:[0,1,1,""],ReadRequest:[0,1,1,""],ReadResponse:[0,1,1,""],ReadSyncRequest:[0,1,1,""],RemoteProtocolError:[0,1,1,""],RepeaterConfirmResponse:[0,1,1,""],RepeaterRegisterRequest:[0,1,1,""],SEND_CREATE_CHAN_REQUEST:[0,0,1,""],SEND_CREATE_CHAN_RESPONSE:[0,0,1,""],SEND_SEARCH_REQUEST:[0,0,1,""],SEND_SEARCH_RESPONSE:[0,0,1,""],SEND_VERSION_REQUEST:[0,0,1,""],SEND_VERSION_RESPONSE:[0,0,1,""],SERVER:[0,0,1,""],SearchRequest:[0,1,1,""],SearchResponse:[0,1,1,""],ServerChannel:[0,1,1,""],ServerDisconnResponse:[0,1,1,""],VersionRequest:[0,1,1,""],VersionResponse:[0,1,1,""],VirtualCircuit:[0,1,1,""],WriteNotifyRequest:[0,1,1,""],WriteNotifyResponse:[0,1,1,""],WriteRequest:[0,1,1,""]}},objnames:{"0":["py","data","Python data"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:data","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"0x1041672b0":6,"0x1041672e8":6,"0x104167320":6,"0x104167358":6,"0x104167550":6,"0x104167588":6,"0x1041675f8":6,"0x10928fe10":6,"0x10928fef0":6,"0x10928ffd0":6,"0x2abdb81307c8":14,"0x2abdb847d408":15,"250x":10,"abstract":[2,13],"boolean":[0,14,15],"byte":[0,2,3,14,15],"case":[2,3,6,14],"char":[0,3,6,12],"class":[0,3,6,8,14,15],"default":[0,3,6,7,12,14,15],"enum":[0,3,14,15],"final":[2,3,11,14,15],"float":[0,3,14,15],"function":[2,3,10,12,14,15],"import":[0,2,5,6,7,9,10,12,14,15],"int":[0,3,6,12,14,15],"long":[0,3,4,6,9],"new":[0,2,3,5,6,9,12,14,15],"return":[0,2,6,12,14,15],"short":12,"switch":7,"true":[0,6,14,15],"try":[2,5,6],"while":[6,12,14,15],Added:12,And:[0,4,6],But:14,For:[0,3,4,5,6,7,9,10,14,15],GPS:5,IDs:2,Its:[2,4,15],PVs:[2,3,5,6,10,12,14,15],That:[3,15],The:[1,2,3,4,5,6,7,8,10,12,13,14,15],There:[2,9,12,14,15],These:[0,2,5,8,11,15],Use:[0,3,6,14],Used:[14,15],Useful:4,Using:[2,4],Will:15,With:0,__init__:0,__main__:6,__name__:6,__repr__:0,__stdin__:6,_broadcast:3,_caproto_pv:10,_circuit:3,_log:7,aaifield:8,aaofield:8,abandon:[4,14,15],abc:6,abid:[2,12],abl:5,about:[0,4,11,15],abov:[2,4,6],acalcoutfield:8,acceler:4,acceleromet:5,accept:[0,2,3,7,12,14,15],access:[0,3,5,6,7,9,10,11,12,13,14,15],access_respons:2,access_right:[0,2,3,12,15],access_rights_callback:[12,15],accessor:12,accessright:[2,3,15],accessrightsrespons:[0,2,3],accident:[12,14,15],accordingli:9,account:9,acctst:12,accumul:[14,15],achiev:12,ack:6,ackt:6,across:15,action:15,activ:[14,15],actual:[2,3,10],adapt:9,add:[7,12,14,15],add_callback:[10,14,15],added:[6,12,15],addhandl:7,adding:10,addit:[0,2,3,4,15],addition:3,addr:7,address:[0,2,7,10,12,15],address_str:0,adel:6,adher:2,advantag:10,advis:4,affect:[2,15],affirm:0,after:[12,15],again:[2,3,14,15],against:[0,2,4,5,9,10,12],aggreg:15,aifield:8,aim:9,air:3,alarm:[0,3,6],alarmsever:3,alarmstatu:3,alia:14,all:[0,2,3,4,5,6,7,9,12,14,15],alloc:0,allow:[0,3,12],alon:5,along:[6,12],alongsid:15,alreadi:[2,3,6,15],also:[0,2,4,5,6,11,12,14],alst:6,alwai:[2,7,12,14],analog:[1,6],analogu:9,analysi:6,andrew:11,ani:[0,2,3,5,6,7,9,14,15],announc:[0,2],anoth:[0,2,3,4,5,14,15],another_func:15,ansi:[3,7],answer:[0,2],anyth:[2,14],aoff:6,aofield:8,apart:10,api:[2,4,7,10,12,13],app:5,appear:9,append:[14,15],appendix:4,appli:15,applic:[4,14,15],approach:[12,14,15],appropri:0,apt:[4,5],arbitrari:15,architectur:4,archiv:3,arguabl:[1,12],argument:[0,3,4,5,6,9,14,15],around:[1,4,6],arr:[9,12],arrai:[0,2,3,4,5,6,12,14,15],array_pad:3,arriv:[2,12,14,15],asg:6,asid:2,ask:[2,3,15],aslo:6,aspect:10,assign:[0,6,15],associ:6,assum:3,asubfield:8,async:[1,5,6,7],async_get:6,async_lib:6,asynchron:[2,4,12],asyncio:[5,6,12,13],asynfield:8,atexit:6,attempt:12,attr:6,attr_separ:6,attribut:[0,3,7,14,15],authent:2,author:[4,10,13],auto:[2,6,8],autogener:6,automat:[0,6,9,15],avail:[2,3,5,6,14,15],avoid:[9,12,14,15],await:[6,7,15],await_create_chan_respons:0,await_search_respons:0,await_version_respons:0,back:[4,5,6,12,15],background:[14,15],backlog:[12,15],backward:3,base:[3,4,6,9,11,12],basi:6,basic:[0,4],batch:[7,9,10,12],batteri:4,battl:4,bcast:7,bcast_socket:2,beacon:[0,9,12],beacon_id:0,beamlin:6,beazlei:11,becaus:[2,5,7,10,14,15],becom:[2,9],bee:4,beej:11,been:[0,2,3,4,6,9,12,14],beer:4,befor:[0,2,3,6,12,14,15],begin:[2,15],behav:14,behavior:[6,12],behind:6,being:[0,6,15],below:[3,6,7,12,14,15],benchmark:4,best:[4,12],better:[2,4],between:[0,2,3,6,12,14],beyond:15,bifield:8,big:2,bigendianstructur:[0,14,15],bin:6,binari:[3,11],bit:[5,15],block:[9,12,14,15],blog:11,bofield:8,bookkeep:4,both:[0,2,7,10,12,15],bottom:6,branch:11,brew:4,bridg:[10,14,15],brief:10,bring:5,broad:4,broadcast:[2,4,15],broke:12,bsd:4,buffer:[0,14,15],buffers_to_send:[0,2],bug:6,build:[4,5],built:[0,4,5,7,13,15],builtin:2,bulk:[10,15],busyfield:8,button:5,bytearrai:2,bytes_receiv:2,bytes_recv:15,bytes_to_send:[0,2],byteslik:0,cach:[3,9,14,15],caget:[3,5,9,10],calcfield:8,calcoutfield:8,call:[0,2,6,10,12,14,15],callabl:[14,15],callback:[6,10,12,14,15],callback_count:3,caller:0,camonitor:[3,9],can:[0,1,2,3,4,5,6,7,10,12,14,15],cancel:6,cannot:[12,14],capabl:6,caproto:[0,1,2,7,8,9,10,12,13,14,15],caproto_io:5,caproto_skip_motorsim_test:5,caproto_string_encod:0,caprotoerror:0,caprotokeyerror:0,caprototimeouterror:15,captur:[5,14],caput:[3,5,9,10,14],care:2,carefulli:15,carepeat:3,casever:[0,2,3,6,14,15],castatu:0,castatuscod:[0,2,3,6,14,15],cat:14,catv:12,caus:[6,12,15],cb_id:14,certain:7,chain:6,chan:2,chang:[0,2,7,13,15],channel:[3,6,7,9,10,11,12,13,14,15],channel_st:[10,15],channeldata:6,channeltyp:[0,2,3,6,12,14,15],channnel:0,check:[0,2,3,14],chnage:0,choic:[4,5,6,10],choos:2,cid:[0,2,3],circ:7,circuit:[0,2,3,7,9,10,12,14,15],circuit_manag:[7,15],circuit_st:[10,15],circuitst:0,class_nam:[0,3],claus:4,clean:[2,12],cleanup:12,clear:[0,2,4,7,14,15],clear_callback:10,clearchannelrequest:[0,2,3],clearchannelrespons:[0,2],clearchannelresposn:0,clever:4,cli:12,click:0,client:[0,4,5,6,7,11,12],client_address:[0,3],client_nam:[0,2,15],clientchannel:[0,2],clientnamerequest:[0,2,3],clog:2,clone:5,close:[0,12,15],code:[0,2,3,4,6,7,8,10,11,12,13,14,15],code_with_sever:[0,2,3,6,14,15],collabor:6,collect:[14,15],color:[3,7],color_log:7,color_log_format:7,color_log_handl:7,com:[0,5],combin:[3,5],come:[2,10,14,15],command:[2,4,5,6,7,12,14,15],commandlin:[6,7,12],common:[8,12,14],commonli:5,commun:[0,2,4],compani:4,companion:0,comparison:2,compat:[3,4,7,12],competit:10,complet:[0,2,3,4,5,6,7,9,10,12,14,15],complianc:4,compliant:6,complic:14,compon:[12,15],compos:[2,6],compound:0,comprehens:[3,10],compressfield:8,comput:[5,6],concept:[2,6,11],conceptu:1,concurr:[4,9,12,13,14,15],conda:[4,5],condens:2,configur:[2,6,7,9,12,15],confirm:[0,3,14,15],conflat:12,confusingli:6,congest:0,connect:[0,2,3,6,7,9,10,12],connection_callback:12,connection_state_callback:15,consist:[0,4,10,12],constant:4,construct:[14,15],contain:[6,12],context:[6,7,10,12,14,15],contigu:[4,14,15],continu:[12,15],contribut:3,contributor:10,control:[0,2,3,4,5,7,9,10,13,14,15],conveni:[0,2,4,5,6,7,14,15],convention:2,convert:0,cooper:4,copi:[2,4,14,15],core:[4,12],correct:12,correctli:9,correspond:0,cost:4,costli:[14,15],could:[2,6,9,12],count:[0,2,4,14,15],counterpart:3,coupl:[6,15],cours:[4,6,7],cover:6,coverag:9,creat:[0,5,6,14,15],create_chan_respons:2,create_connect:2,create_fail:0,createchanrequest:[0,2,3],createchanrespons:[0,2,3,12],createchfailrespons:[0,12],creation:[0,15],critic:12,ctrl:[3,6,12,14],ctrl_char:0,ctrl_doubl:[0,3],ctrl_enum:0,ctrl_float:0,ctrl_int:0,ctrl_long:0,ctrl_string:0,ctx:[6,7,15],ctype:[0,4,14,15],curio:[1,5,6,12,13],current:[0,2,3,12,14,15],current_raw_valu:6,custom_writ:6,customwrit:6,daemon:[3,6],dallan:3,daniel:3,data:[2,3,4,6,9,12,14,15],data_count:[0,2,3,6,12,14,15],data_typ:[0,2,3,6,14,15],databas:[0,8],datagram:[0,2,3,10,12],date:3,datefmt:7,david:11,davidsav:[11,12],dbe:9,dbe_alarm:0,dbe_properti:0,dbe_valu:0,dbnd:9,dbr:[0,9],dbr_ctrl_float:3,dbr_time_doubl:0,debug:[3,4,6,7,12,14],declar:12,declin:15,decompos:6,decor:6,decreas:15,def:[2,6,10,14,15],default_prefix:6,default_protocol_vers:0,defens:4,defin:[6,10,12,14,15],defunct:[0,2,3,6,14,15],delimit:3,demo:[2,3,10,14,15],demonstr:[2,4,6,15],depend:[4,5,6],deprec:[0,9,14,15],depth:11,dequ:2,desc:6,describ:[0,14],descript:[0,2,3,6,14,15],descriptor:[6,12],design:[0,1,2,4,6,10,14],desir:0,detail:[0,2,4,6,12],detect:3,detector:6,determin:2,determinist:15,develop:[1,4,6,11,13],devic:[4,5,6,12,15],dfanoutfield:8,dict:6,dictionari:15,did:[2,12],differ:[2,4,10,12,13],differenti:12,digitelfield:8,direct:0,directli:[0,2,4,5,13,14,15],directori:6,disa:6,discard:15,disconnect:[0,12,15],discuss:12,disp:6,displai:[3,6,12,15],diss:6,distinct:12,distribut:4,disv:6,doc:5,docstr:15,document:[4,5,10,11,12,13],doe:[0,2,3,9,12,15],doesn:2,dog:14,doing:[0,2,3],don:[2,6],done:[2,6],dot:[3,14,15],doubl:[0,2,3,12,14,15],doucment:10,down:6,driver:6,drop:[3,4,10],drown:[9,12],dtyp:6,dtype:[0,6],durat:[3,14],dure:15,each:[0,2,3,6,14,15],easi:[2,4,6,8],easier:[2,3,6],easili:5,eca_newconn:0,eca_norm:[2,3,6,14,15],echo:[0,6],echorequest:0,echorespons:0,effect:[3,12,15],effici:[4,9,10,12,14,15],effort:4,effortlessli:4,egu:6,eguf:6,egul:6,either:[2,12,15],element:[0,2],elid:10,els:6,embodi:4,emploi:4,encapsul:[0,2,6,10,14,15],encapul:0,encod:[0,2,4,6],end:[0,2],endian:2,enforc:[9,12],engin:[4,5,6],ensur:[2,12],entir:[10,12],entri:[4,6],enumer:0,env:6,environ:[0,2,3,5,6,9,12],eoff:6,epic:[0,2,3,4,5,6,8,9,10,11,12,14,15],epics_bas:5,epics_ca:9,epics_ca_addr_list:2,epics_ca_auto_addr_list:2,epics_ca_repeater_port:3,epidfield:8,equival:[0,2,15],era:4,err:5,error:[0,12],error_messag:0,errorrespons:[0,14],escap:[3,14],eslo:6,establish:[4,10],etc:[2,4,5,15],evan:11,even:[3,4],event:[0,3,6,7,12,14],eventaddrequest:[0,2,15],eventaddrespons:[0,2,12],eventcancelrequest:[0,2],eventcancelrespons:[0,2,12],eventfield:8,events_off:15,events_on:15,eventsoff:[9,12],eventsoffrequest:0,eventson:[9,12],eventsonrequest:0,ever:10,everi:[0,2,4,6,9,10],evnt:6,exactli:0,exampl:[0,2,4,5,7,8,10,12,14,15],except:[4,6],exchang:15,exec:5,execut:[3,5,12,15],exercis:[4,10],exist:[2,4,6,10,12,15],exit:[2,3,6,12,15],expand:[0,12],expect:[0,2,5,12,14,15],experi:[2,12],experiment:[1,4,12,13],explicitli:[12,15],explor:[1,4,6],expos:[6,7],express:5,extend:6,extra:6,extract_address:2,extrem:[3,5],f_getfl:6,f_setfl:6,facil:4,facilit:2,factor:12,fail:[0,12],failur:[0,12,14],fairli:12,fall:5,fals:[0,2,3,6,7,14,15],fan:[14,15],fanoutfield:8,faq:6,fashion:7,fast:[4,12],faster:15,fcntl:6,featur:[1,9],field:[0,3,6,8,14,15],field_spec:6,file:[7,12,15],filehandl:7,filenam:6,fileno:6,fill:[0,2,6],filter:[5,9,12],find:5,fine:2,finish:[12,15],first:[0,2,4,5,14,15],fixed_random:6,flat:6,flavor:2,flnk:6,flow:9,follow:[2,3,6,12,15],forc:15,force_int_enum:14,forev:[6,14,15],fork:12,format:3,formerli:12,formul:15,formula:11,found:[2,3,15],four:14,framework:[1,4,7],frequenc:15,fresh:[0,2,14,15],friendli:[4,6,10,14,15],from:[0,2,3,4,5,7,8,9,10,12,14,15],full:[10,14],fulli:[0,15],fun:4,func:[14,15],functool:15,fund:4,futur:[1,6,12,14,15],gain:12,garbag:[14,15],gener:[0,2,3,6,8,12,14,15],gensubfield:8,get:[5,6,7,9,10,14,15],get_address_list:2,get_cached_search_result:15,get_pv:[6,10,15],get_random:6,gethostnam:15,getlogg:[6,7,15],getpass:[0,15],getter:6,getus:[0,15],git:5,github:[5,9,12],give:[0,2,5,10,12],given:[0,2,6,7,9,15],go_idl:15,goal:[3,13],going:2,gone:9,got:15,gr_char:0,gr_doubl:0,gr_enum:0,gr_float:0,gr_int:0,gr_long:0,gr_string:0,grab:6,graphic:[0,3,14,15],greater:15,group1:6,group2:6,group3:6,group3_prefix:6,group4:6,group:6,guarante:[14,15],guid:11,h11:[4,11],had:[12,15],hand:[10,15],handi:[4,7,15],handl:[0,2,4,6,11,15],handler:4,handshak:[12,15],happen:12,hard:[0,12],hardwar:[4,6],has:[0,2,3,4,6,9,10,12,14,15],have:[1,2,4,5,6,9,12,14,15],header:[0,14,15],heartbeat:[0,2],heavi:10,heavili:[1,12],heel:12,help:[2,3,6],here:[0,2,6,7,13,15],hex:2,hhsv:6,high:[0,2,6,9,12,14,15],higher:[2,3,12],highest:[0,3,14,15],highli:12,hihi:6,histogramfield:8,histori:4,hobbi:4,hold:[14,15],homebrew:[4,5,11],hopr:6,host:[0,2],host_nam:[0,2,15],hostnamerequest:[0,2,3],hour:3,how:[2,4,7,9,12,14],howev:[1,6],hsv:6,html:5,http:5,human:[4,6,14,15],hurrai:2,hyst:6,iOS:4,icanon:6,idempot:14,identif:0,identifi:[0,12],idl:[0,10],ifi:6,ignor:[2,9,15],illeg:[0,2],imagin:6,immedi:[12,14,15],implement:[0,1,2,3,4,5,6,8,9,10,12,13,14,15],impli:3,implicitli:[6,15],incident:2,includ:[0,2,3,4,5,6,7,9,10,12,13,15],incom:[2,14],increas:[12,15],increment:0,inde:14,indefinit:[3,14],independ:2,indic:0,indispens:4,individu:[0,2,15],industri:4,ineffici:14,infer:14,info:[0,3,7],inform:[5,7,15],inherit:[0,15],init:6,initi:[0,2,4,6,12,14,15],inline_styl:6,inlinestyleioc:6,inp:6,input:[0,4,13,14],insensit:3,insid:0,inspir:4,instal:[2,3,4,12],instanc:[0,6,7,15],instanti:[0,2,6,15],instead:[0,4,7,10,12,14,15],int32:6,integ:[0,2,3,6,14,15],intend:[3,4,6,10,14,15],interact:[0,6,13,14],interest:[1,2,4,6,11,13],interfac:[2,6,7,9,12,14],intermedi:[5,14,15],intern:[0,2,14,15],interpret:[2,3,4],interrupt:[12,14],interv:15,introspect:4,invalid:6,invoc:3,invok:6,involv:3,io_interrupt:6,ioc:[2,3,4,5,8,10,12,13,14,15],ioc_arg_pars:6,ioc_exampl:[2,3,4,5,6,7,10,14,15],ioc_opt:6,ioerror:6,ioid:[0,2,3,6,14,15],iointerruptioc:6,ipad:5,iphon:5,isatti:6,isn:3,issu:[1,3,9,12,15],item:6,iter:[0,4,6,12,14,15],its:[0,2,3,4,5,6,7,9,12,14,15],itself:[2,4],job:2,johnson:11,json:6,juggl:2,just:[2,4,6,10,12,14,15],kah:4,keep:[0,4],kei:[0,6],ken:11,kenneth:11,keyboard:6,keyerror:[0,15],keypress:6,keystrok:6,keyword:14,kill:12,kind:4,klauer:5,know:[6,15],known:[1,12,15],kwarg:[6,10],label:3,laboratori:4,lack:[1,12],lalm:6,lambda:[14,15],larg:[4,10,15],late:15,latenc:[9,12],later:[14,15],latin:0,lauer:11,launch:[5,6],layer:[0,4,12],layout:8,lbrk:6,lcnt:6,lead:10,learn:4,least:[1,2,14,15],left:15,len:[14,15],length:[0,3,12],less:12,let:[0,2,3,6,14,15],level:[0,2,7,10,12,13,14,15],leverag:10,lib:[5,6],libca:10,librari:[2,6,13],licens:4,lifetim:15,lightweight:5,like:[0,2,3,6,12,14,15],likewis:12,limit:[0,15],line:[5,6,14,15],link:8,linr:6,linux:4,list:[0,2,3,4,6,7,12,14,15],listen:[2,3,6],littl:[9,12],llsv:6,load:[0,7,9,12,14,15],local:3,localhost:2,localprotocolerror:[0,2],locat:2,lock:12,log:[0,3,4,6,10,12,15],log_date_format:7,logformatt:7,logger:[0,4,6,12],logger_nam:7,lolo:6,longinfield:8,longoutfield:8,look:[0,2,6],loop:6,lopr:6,lost:0,low:[0,2,6,9,12,13,14,15],lower:10,lower_alarm_limit:3,lower_ctrl_limit:3,lower_disp_limit:3,lower_warning_limit:3,lowest:[0,3,14,15],lsv:6,lyric:2,macbook:3,machin:[2,4,6],macroifiednam:6,made:[12,15],mai:[0,2,4,6,9,10,11,12,14,15],main:[6,10],maintain:[0,4],make:[2,3,5,6,8,10,12,14,15],maker:4,manag:[0,15],mani:[4,5,6,7,9,12,14,15],manual:[2,5,7,15],mask:[0,2,3,9,14,15],match:[0,2,5,12,14,15],matrix:[2,11],matter:15,max:12,max_length:6,max_work:[12,15],maxim:[7,15],maximum:[3,12],mbbidirectfield:8,mbbifield:8,mbbodirectfield:8,mbbofield:8,mdel:6,mean:[0,2,5],mechan:9,medium:12,meet:4,member:15,memori:[4,14,15],memoryview:2,mere:[14,15],messag:[0,2,3,4,6,7,9,12,14,15],messagehead:[0,14,15],metadata:[0,2,3,6,14,15],meth:15,method:[0,2,4,5,6,14,15],metric:7,michael:[11,12],microsecond:12,middl:14,might:[2,14],milisecond:12,mini_beamlin:12,minim:[4,15],minut:3,mirror:6,miss:15,mit:4,mix:6,mixtur:15,mlst:6,mock:4,mock_record:6,mocking_record:6,mode:[3,5],model:4,modifi:6,modul:[1,5,7,10,15],monitor:[6,9,12],more:[0,2,3,4,5,7,9,10,12,14,15],most:[1,4,9,12,15],motorfield:8,motorsim:[5,11],move:3,much:[2,7],multipl:[2,3,4,9,12,14,15],must:[0,2,6,14,15],must_clos:0,my_beamlin:6,my_custom_prefix:6,my_func:15,my_writ:6,mypvgroup:6,mysubgroup:6,name:[0,2,3,4,5,10,12,14,15],narrow:7,nativ:[0,2,3,6,14,15],native_data_count:[0,14],native_data_typ:0,natur:15,navig:5,ndarrai:[0,2,4,14,15],necessari:[2,4,5,15],need:[0,2,3,4,13,14,15],need_data:0,neg:0,neo:2,nerd:4,nest:6,netifac:5,network:[0,2,4,5,9,10,11,15],never:[12,15],new_channel_id:0,new_ioid:0,new_search_id:0,new_subscriptionid:0,new_value_callback:6,newattr:6,next:[2,3,6,14,15],nice:6,no_alarm:3,no_repli:0,non:[7,12,15],none:[0,2,3,6,14,15],normal:[2,3,6,14,15],note:[0,6,10,14,15],notfoundrespons:0,notic:[0,2,9,14,15],notif:[0,3,14],notifc:0,notifi:[0,3,6,12,14,15],notion:14,now:[2,3,4,6,10,12,14,15],nsev:6,nsl:5,nsta:6,num_bytes_need:0,number:[0,3,4,5,6,7,10,12,14,15],numer:3,numpi:[0,2,4,5,12,14,15],o_nonblock:6,obei:2,object:[2,4,6,7,10,14,15],observ:6,obtain:[0,3],obviou:0,obvious:14,occasion:10,occur:15,off:[0,6,7,9,12],old:[2,3,9],older:12,oldflag:6,oldterm:6,omit:12,onc:[2,14,15],one:[0,2,3,4,6,7,9,10,12,14,15],ones:[2,12,15],onli:[0,3,4,5,6,12,14,15],onto:[14,15],opaqu:0,open:[0,2,5,6],oper:[12,14,15],oppos:10,optim:14,option:[0,2,3,4,5,6,11,14,15],oraw:6,order:[0,14,15],ordereddict:6,organ:4,origin:[0,1],original_request:0,osx:[4,11],other:[2,4,5,6,7,9,12,14,15],our:[0,2,3,4,6],our_rol:[0,2],out:[0,2,6,7,9,10,12,13,14,15],outgo:2,output:[0,2,3,4,12,13],outsid:[6,15],over:[0,2,4,7,12,14,15],overal:[12,15],overflow:11,overhead:12,overload:2,overs:12,owes:4,own:[4,9,15],pack:0,packag:[3,4,5],packet:[0,10,12],pact:6,pad:[0,3],pai:4,paramet:[0,2,6,12,14,15],parameter1:[0,14,15],parameter2:[0,14,15],parent:6,pariti:[1,9,12],pars:[0,2,3,11],part:[0,15],partial:15,particl:4,particular:[2,3,13,14,15],pass:[0,2,5,6,12,14,15],path:[3,6],pathlib:6,pattern:[2,4,5],payload:[2,4,12],payload_s:[0,14,15],peer:[0,2],per:[0,5,6,9,12,15],perform:[4,7,9,14,15],period:[3,6,14,15],permiss:2,permissivefield:8,persist:15,pha:6,physic:4,pick:6,pini:6,pip:4,pitfal:15,place:3,placeholder1:6,placeholder2:6,plai:[0,2,5],plain_log_handl:7,platform:[2,6],plugin:11,point:[4,6,14,15],poke:1,polic:2,popul:15,port:[0,2,3,9,14,15],portabl:[4,10],posit:[3,14,15],possibl:[3,6,9,15],post:11,pprint:6,prec:6,precis:[3,6],prefix:[6,8],press:6,previou:[2,12],previous:[6,12],primarili:15,principl:4,print:[6,10,12,14,15],prio:6,prior:15,priorit:[0,9,12],prioriti:[0,2,3,7,9,10,14,15],proc:6,process:[0,2,3,6,10,12,14,15],process_command:[0,2],processs:15,produc:15,program:[4,11],programmat:4,progress:[12,15],project:[4,11],prolif:[9,12],promis:12,promptli:[14,15],pronounc:4,propag:[6,7],properli:[2,12,15],properti:3,protcol:11,proto:4,protocol:[0,2,6,11,15],protocol_vers:0,protocolerror:0,provid:[0,2,3,6,10,14,15],pull:10,purchas:5,pure:2,purpos:3,put:[4,6,9,10,12,14,15],put_ack:3,put_ackt:3,putf:6,putter:6,pv_name:[3,6,10,14],pva:6,pvdb:6,pvfunction:6,pvgroup:6,pvproperti:[6,12],pvpropertyinteg:6,pvpropertyintegerro:6,pvpropertystringro:6,pvs:[3,4,6,10,15],pvspec:6,pyepic:[4,7,11,12],pyepics_compat:10,pytest:5,python3:[2,3,4,5,6,7,10,14,15],python:[0,3,5,7,8,9,10,11,12,13,14,15],pythonista:5,queri:[0,3],queu:[9,12],queue:[0,6],quick:2,quickli:12,quiet:3,quota:[9,12],rais:[0,2,6,15],randint:6,random_int:6,random_str:6,random_walk:[2,3,6,7,10,14,15],randomwalkioc:6,randstr:6,rang:2,rare:[2,15],raspberrypi:4,rate:[6,9,12],rather:[0,5,6,10,15],rational:4,raw:[2,14,15],rbv:6,reactiv:[14,15],read:[0,3,4,7,12],read_data_typ:14,read_from_bytestream:0,read_write_read:14,readabl:6,readi:[0,4],readnotifyrequest:[0,2,3,14,15],readnotifyrespons:[0,2,3,6,14,15],readrequest:[0,14,15],readrespons:[0,9,14],readsyncrequest:0,reagan:4,realli:2,rebroadcast:2,recal:[2,7,14],receipt:[0,14,15],receiv:[0,2,3,4,6,7,10,12,14,15],recent:[12,15],recommend:[10,12],reconnect:[9,15],record:[0,4],record_like1:6,record_typ:6,recordfieldgroup:8,recordlik:6,recordlike1:6,recordlike2:6,recordmockingioc:6,recv:[0,2,15],recv_address:2,recvfrom:2,redi:6,redo:15,reduc:[12,15],redund:12,redundantli:14,refer:[0,3,4,5,6,8,9,12,13,14,15],reflect:[12,14],regist:[0,3,6,14,15],registr:0,registration_retry_tim:15,registri:[14,15],regular:15,reissu:15,relat:[3,4,12,14],releas:[1,4],reli:[4,5,6,12],reliabl:4,remot:0,remoteprotocolerror:[0,2],remov:[7,12,14,15],remove_callback:[14,15],repeat:[0,14],repeatedli:15,repeater_address:0,repeaterconfirmrespons:0,repeaterregisterrequest:[0,2,3],replac:[3,4,10],repli:[0,7,12],report:[0,2],repositori:5,repres:[0,10,15],represent:[14,15],repsons:14,req:2,request:[0,2,3,5,7,9,10,12,14],requir:[0,2,4,5,6,15],res:[14,15],reset:6,reset_termin:6,resolv:0,resourc:[4,11],respect:[0,1,9,12,15],respond:[0,9,12],respons:[0,2,3,7,9,10,12,14,15],rest:10,restart:5,restor:0,result:[3,14,15],results_queu:15,resum:0,retri:15,retriev:[3,14],retval:6,reus:[2,6,12],reusabl:4,revers:2,review:6,revis:[1,12],reward:4,richer:3,right:[0,2,5],robust:4,roff:6,role:[0,2],roll:9,root:4,rpc_function:6,rpro:6,rtyp:6,rule:2,run:[2,3,4,5,6,8,10,12,14,15],run_opt:6,run_test:5,runawai:12,rval:6,safe:[3,15],sai:[2,4],said:4,same:[0,2,4,5,9,14,15],sampl:10,san:[2,4,11],sandwich:14,satisfi:14,save:15,saw:6,scalar:[0,3,12],scalcoutfield:8,scan:[6,12],scanparmfield:8,scenario:15,schedul:[9,15],scientist:[4,6],scratch:4,script:5,sdi:6,search:[0,3,7,12],search_now:15,search_respons:2,searches_pend:[10,15],searchrequest:[0,2,3,9,12,15],searchrespons:[0,2],second:[2,3,6,12,14,15],section:[2,6,12],secur:2,see:[0,2,3,4,5,6,7,8,9,10,12,13,14,15],seen:[0,6,12],select:[14,15],select_backend:5,selector:[9,15],self:6,selfield:8,semant:6,send:[0,2,3,6,9,12,14,15],send_create_chan_request:0,send_create_chan_respons:0,send_search_request:0,send_search_respons:0,send_version_request:0,send_version_respons:0,sendmsg:2,sendto:2,sent:[0,2,3,4,6,7,12,15],sentinel:0,separ:[2,3,4,5,6,10,14,15],seqfield:8,sequenti:[0,15],serach:2,seri:3,serial:[3,6,12],serv:[0,2,5,6],server:[0,2,3,4,5,7,8,10,11,14,15],server_port:0,serverchannel:0,serverdisconnrespons:0,servic:[6,15],set:[2,3,4,5,6,12,14,15],setformatt:7,setlevel:[7,15],sever:[0,2,3,4,5,6,12,14,15],sevr:6,share:[4,15],sharedbroadcast:15,shell:[2,3,5,10,14,15],shim:10,ship:12,shorthand:9,shot:15,should:[0,2,3,5,12,14,15],show:[2,3,6],shut:6,sid:[0,2,3],side:[0,6,7,12],sigint:[12,14],signal:[6,14],signatur:[12,14,15],silenc:15,silent:[14,15],silo:6,sim:6,similar:[3,6,12],similarli:[0,6],siml:6,simm:6,simpl:[0,2,4,5],simpleioc:6,simpli:6,simplic:14,simplifi:4,simul:6,sinc:[0,3,9],singl:[0,2,6,15],siol:6,site:5,size:12,skip:5,sleep:[6,10],slide:11,slow:[9,12],slower:[12,15],small:[5,12],smoo:6,snip:[3,6],snippet:4,sock:2,socket:[0,2,4,6,11,12,14,15],softioc:5,some:[0,1,2,3,4,5,6,10,12,14,15],someth:[0,4],somewhat:[2,3,6],sort:0,sourc:[0,5,8,11,12,13,14,15],space:[2,3,15],spawn:[3,14],speak:[4,6,12],spec:[0,11,12,14],special:4,specif:[0,2,3,6,7,9,12,14,15],specifi:[0,2,3,7,10,15],speech:5,speed:10,speedup:10,spell:2,spin:6,spirit:12,spoof_beamlin:12,sscanfield:8,sseqfield:8,stabl:12,stack:[10,11],stackoverflow:6,stai:15,stale:15,standard:[3,4,5,6,7,14,15],star:4,start:[0,2,3,4,5,6,10,14,15],start_io_interrupt_monitor:6,startup:[3,6,12],stash:[2,5,15],stash_result:15,stat:6,state:[2,4,7,10,14,15],statefield:8,statu:[0,2,3,6,14,15],stdin:6,stdout:5,steadi:12,steer:4,step:[2,6,10],still:[1,2,3,7,13,15],stipul:14,stop:[6,14],store:[5,6,14,15],stori:2,str:[6,7,14,15],straightforward:12,strateg:4,strategi:4,stream:7,string:[0,3,6,14,15],string_encod:0,stringinfield:8,stringoutfield:8,struct:0,structur:[0,4,6,14,15],sts_char:0,sts_doubl:0,sts_enum:0,sts_float:0,sts_int:0,sts_long:0,sts_string:0,stsack_str:[0,3],stuck:15,sub1:14,sub2:14,sub:[14,15],sub_dt:14,sub_x:14,subarrayfield:8,subfield:8,subgroup4:6,subject:13,subpackag:6,subscrib:[0,3,6,10],subscript:[0,2,9,10,12,14,15],subscriptionid:[0,2],subscriptiontyp:[0,14,15],subsequ:15,substitut:6,subtl:12,success:[0,2,3,6,14,15],successfulli:14,succinct:[2,4],succinctli:2,suffici:14,suggest:[12,15],suit:[4,10],suitabl:4,summari:9,superset:3,support:[0,2,3,4,5,7,10,12,14,15],suppos:15,suppress:3,supsens:15,sure:6,surpris:[14,15],suspend:15,suspens:9,sustain:12,sval:6,swaitfield:8,sync:[9,14],synchron:[2,4,5,12],synchrotron:4,syntax:[9,15],sys:6,system:[0,2,4,12],tab:3,tablefield:8,take:[0,6,9,12,14],talk:[2,3,10,11,14,15],tap:5,target:6,task:[6,9,12],tcgetattr:6,tcp:[0,2,7,10,12,15],tcsaflush:6,tcsanow:6,tcsetattr:6,tech:11,telescop:4,tell:[0,6],temp:6,temp_path:6,temporari:9,temporarili:[0,15],term:[0,2,4],termin:[3,4,6],termio:6,ters:3,test:[0,4,5,9,10,12],text:5,than:[6,10,12,14,15],thank:6,thei:[0,1,3,4,5,6,12,14,15],them:[0,1,2,6,10,14,15],therefor:[14,15],thi:[0,2,3,4,5,6,9,11,12,14,15],thing:[2,6],think:[0,15],thoroughli:12,those:[2,4,6,15],thread:[1,4,5,6,7,10,12,14],threader:15,threadpool:12,threadsafequeu:6,three:[3,12,13,14],threshold:15,through:[0,5],throughput:12,thu:15,time:[0,2,3,4,6,7,10,14,15],time_char:0,time_doubl:0,time_enum:0,time_float:0,time_int:0,time_long:0,time_str:0,timedelta:3,timeout:[3,14,15],timestamp:3,timestampfield:8,tmp:6,todo:[6,7],togeth:[0,2],token:[3,14,15],too:[2,7],tool:[4,6],toolkit:4,top:[10,14],total:12,touch:15,toward:6,tpro:6,track:[0,2,15],tracker:9,trade:[9,12],traffic:[2,11,15],transact:0,transformfield:8,translat:2,transmiss:12,transmit:[0,2],transpar:15,transport:[2,4,15],tri:0,triag:[14,15],trick:4,trigger:6,trio:[1,5,6,12,13],tse:6,tsel:6,tty:6,tune:11,tupl:[0,2,14],turn:[0,7,15],tutori:4,twice:15,twist:11,two:[0,2,6,10,15],txt:5,type:[2,3,4,6,9,12,14,15],typic:[2,12],typo:[12,15],udf:6,udp:[0,2,7,10,12,15],udp_sock:2,ugprad:12,uint8:6,unansw:[9,15],uncoupl:6,under:[0,4,7,9,12,14,15],underli:[10,12,14,15],understand:[4,6],uniqu:[0,2,15],unit:[3,4,12],unless:[2,5,14],unlik:15,unlimit:[0,3,15],unpack:3,unsubscrib:[0,2],unsubscribe_al:15,until:[2,15],unus:[0,12,15],unwant:15,updat:[0,3,6,7,9,12,14,15],upgrad:14,upon:15,upper_alarm_limit:3,upper_ctrl_limit:3,upper_disp_limit:3,upper_warning_limit:3,usag:[3,6,8,10,12],use:[0,2,3,4,5,6,7,10,12,14,15],used:[0,2,3,4,6,7,14,15],useful:[0,4,5,6,11,14,15],user:[0,2,4,6,10,12,14,15],uses:[0,7,14,15],using:[0,1,2,3,4,5,6,7,9,10,11,12,14,15],usr:6,usual:[6,7],util:[2,3,12,14],val:6,valid:[0,2],valu:[0,3,4,6,10,12,14,15],valuabl:6,valueerror:[6,15],variabl:[0,2,3,5,9],variant:3,variou:[0,4,15],verbos:[3,4,5,7,10,12,15],veri:[1,12,14],verifi:[2,4,5],version:[0,2,3,4,5,7,9,12],version_respons:2,versionrequest:[0,2,3],versionrespons:[0,2,3],vestigi:3,via:[2,3,5,6,7,12,15],view:[0,3,6,14,15],violat:0,virtual:[0,2,3,14,15],virtualcircuit:[2,4,15],virtualcircuitmanag:15,virtualciruit:0,visual:3,vmefield:8,vsfield:8,vvv:[3,7],wai:[0,2,6,7,14,15],wait:[3,4,6,12,14,15],wait_for_search:15,want:[2,4,5,10,14,15],war:4,warn:[3,12,15],watch:2,waveformfield:8,weak:[14,15],web:6,welcom:3,well:[0,4,5,10,14],were:[4,11,12,14,15],what:[0,2,4,6,14],when:[0,2,4,7,9,12,14,15],whenev:[6,12,14,15],where:[6,7,15],wherea:[6,10],wherein:12,whether:0,which:[0,2,3,4,6,7,12,14,15],whichev:[3,6],who:[4,6],whose:15,why:[2,4,10],wide:3,wifi:5,wild:12,win32:6,window:4,wire:[2,4],wireshark:11,wish:14,within:15,without:[7,15],word:[2,4],work:[0,2,5,6,9,14,15],worker:15,world:[4,6],worthwhil:9,would:[4,10,14],wrap:4,wrapper:10,writabl:6,write:[0,3,4,7,12,13],write_data_typ:14,write_respons:14,writenotifyrequest:[0,2],writenotifyrespons:[0,2,6,14,15],writerequest:0,written:[10,14],wrong:12,wrote:6,x00:[2,14,15],x00random_walk:2,x01:[2,14,15],x05:2,x06:[2,14,15],x08:[14,15],x0f:[14,15],x10:2,x11:2,x18:2,x7f:2,x_pv:10,xf0:[14,15],xf31id:6,yes:2,yet:[0,3,13,14,15],you:[0,2,4,5,6,7,10,11,14],your:[0,3,4,5,13,15],your_filepath:7,zero:[4,15]},titles:["Core API Documentation","Asynchronous Clients","Writing Your Own Channel Access Client","Command-Line Client","caproto: a pure-Python Channel Access protocol library","Install Caproto","Input-Output Controllers (IOCs)","Loggers","Mock Records","Details of our Protocol Compliance for CA Nerds","Pyepics-Compatible Client","References","Release History","Servers","Synchronous Client","Threading Client"],titleterms:{"break":12,"function":6,"try":4,Not:4,The:0,Use:4,Useful:7,Using:[5,6],access:[2,4],acknowledg:4,api:[0,3,14,15],asynchron:1,basic:2,batch:15,big:4,bookkeep:2,broadcast:0,bug:12,cancel:15,caproto:[3,4,5,6],chang:12,channel:[0,2,4],client:[1,2,3,9,10,14,15],close:2,command:[0,3,9],compat:10,complianc:[9,12],connect:[14,15],constant:0,content:[0,4],control:6,core:[0,9],creat:2,custom:6,data:0,debug:15,demonstr:10,detail:9,develop:5,document:[0,3,14,15],event:[2,15],exampl:6,except:0,featur:12,file:6,fix:12,four:4,from:6,get:3,handl:14,handler:7,histori:12,iOS:5,idl:15,improv:12,inlin:6,input:6,instal:5,interrupt:6,ioc:6,librari:4,line:[3,4,9],log:7,logger:[7,15],machin:0,macro:6,minim:5,mock:[6,8],monitor:[3,14,15],more:6,name:[6,7],nerd:9,object:0,off:15,our:9,output:6,own:2,payload:0,perform:12,pip:5,protocol:[4,9,12],pure:4,put:3,pyepic:10,python:[4,6],random:6,read:[2,6,14,15],reason:4,record:[6,8],refer:11,regist:2,releas:12,repeat:[2,3],request:15,rpc:6,search:[2,15],server:[6,9,12,13],simpl:6,simplifi:2,snippet:7,special:0,state:0,stateless:14,statist:4,style:6,subgroup:6,subscrib:[2,14,15],support:9,synchron:[9,14],thi:10,thread:[9,15],tune:12,tutori:[3,14,15],type:0,updat:2,valu:2,virtualcircuit:0,vital:4,walk:6,what:10,when:6,why:6,write:[2,6,14,15],written:6,your:2}})